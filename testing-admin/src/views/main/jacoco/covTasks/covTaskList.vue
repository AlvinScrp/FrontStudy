<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <span></span>
      <el-radio-group v-model="statusCurrent.label">
        <el-radio-button
          v-for="(statusBean, index) in statusBeans"
          :key="index"
          :label="statusBean.label"
          @click="onStatusSelected(statusBean)"
          >{{ statusBean.label }}
        </el-radio-button>
      </el-radio-group>

      <search-bar
        :init-input="initInput"
        placeholder="请输入服务名称"
        @search="search($event)"
        @reset="resetSearch()"
      />
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        style="width: 100%"
        v-model:page="page"
        v-loading="loading"
        :showIndex="false"
        :showSelection="false"
        :data="tableData"
        @loadTableData="loadTableData"
      >
        <el-table-column
          v-for="(column, index) in tableColumns"
          :key="index"
          :fixed="column.fixed ?? false"
          :prop="column.prop"
          :label="column.label"
          :align="column.align ?? 'center'"
          :min-width="column.minWidth"
          :width="column.width"
          :formatter="column.formatter"
        />
        <el-table-column label="操作" align="center" fixed="right" width="240">
          <template #default="scope">
            <el-button
              :disabled="!hasReport(scope.row) || !isSupportedCopy"
              type="text"
              @click="handleCopyLink(scope.row)"
            >
              复制链接
            </el-button>
            <el-button :disabled="!hasReport(scope.row)" @click="handleLookReport(scope.row)" type="primary"
              >查看报告
            </el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, UnwrapNestedRefs, watch, defineProps } from 'vue'
import Table from '@/components/table/index.vue'
import SearchBar from '../common/searchBar.vue'
import { Page, Column } from '@/components/table/type'
import { loadCovTasks } from '@/api/jacoco'
import { CovTaskBean } from '@/api/bean'
import { useSearch } from '../common/search'
import { useRoute, RouterLink } from 'vue-router'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { formatDate } from '@/utils/share/dateUtils'

const props = defineProps<{ id: number; application: string }>()

const { tableColumns } = useTableConfig(useCompleteReportPath)
const { page, loading, tableData, loadTableData } = usePageData()
const { statusCurrent, statusBeans, onStatusSelected } = useStatusBar(page, loadTableData)
const { searchKey, search, resetSearch } = useSearch(page, loadTableData)
const { hasReport, isSupportedCopy, handleCopyLink, handleLookReport } = useTableHandle()

const initInput = ref('')
onMounted(() => {
  const route = useRoute()
  const application = (route?.query?.application ?? '') as string
  console.log('props :>> ', props)
  initInput.value = application
  search(application)
})

function useTableConfig(completeReportPathFn: (reportPath?: string) => string) {
  const formatStatus = (row: CovTaskBean) => ['初始化', '执行中', '已结束'][row.status] ?? '未知'
  const formatResult = (row: CovTaskBean) => ['初始化', '成功', '失败'][row.result] ?? '未知'
  const formatUpdateTime = (row: CovTaskBean) => formatDate(row.updateTime)
  const completeReportPath = (row: CovTaskBean) => completeReportPathFn(row.reportPath)

  const tableColumns: Column[] = [
    { fixed: true, prop: 'id', label: 'ID', width: 70, align: 'center' },
    { fixed: true, prop: 'application', label: '服务名称', minWidth: 180, align: 'center' },
    { prop: 'status', label: '任务状态', width: 70, formatter: formatStatus },
    { prop: 'result', label: '运行结果', minWidth: 70, formatter: formatResult },
    { prop: 'reportPath', label: 'report URL', minWidth: 350, formatter: completeReportPath },
    { prop: 'updateTime', label: '更新时间', width: 180, formatter: formatUpdateTime },
    { prop: 'remark', label: '备注', minWidth: 180 },
  ]
  return { tableColumns }
}

function usePageData() {
  const page: Page = reactive({ index: 1, size: 20, total: 0 })
  const loading = ref(true)
  const tableData = ref<Array<CovTaskBean>>([])

  const loadTableData = () => {
    console.log('loadTable searchKey.value :>> ', searchKey.value)
    loading.value = true
    let params = {
      status: statusCurrent.value.status,
      application: searchKey.value,
      pageNo: page.index,
      pageSize: page.size,
    }
    loadCovTasks(params)
      .then((res) => {
        console.log('res.data.data.length :>> ', res.data.data.length)
        tableData.value = res.data.data
        page.total = res.data.pageBean.total
      })
      .catch((error) => {
        console.log('load cov tasks error :>> ', error)
        tableData.value = []
        page.index = 1
        page.total = 0
      })
      .finally(() => {
        loading.value = false
      })
  }
  return { page, loading, tableData, loadTableData }
}

function useStatusBar(page: UnwrapNestedRefs<Page>, loadTableDataFn: () => void) {
  interface StatusBean {
    label: string
    status: number
  }

  const statusBeans: StatusBean[] = [
    { label: '全部状态', status: -1 },
    { label: '初始化', status: 0 },
    { label: '执行中', status: 1 },
    { label: '已结束', status: 2 },
  ]
  const statusCurrent = ref(statusBeans[0])

  const onStatusSelected = (statusBean: StatusBean) => {
    page.index = 1
    statusCurrent.value = statusBean
    loadTableDataFn()
  }
  return { statusCurrent, statusBeans, onStatusSelected }
}

function useTableHandle() {
  //剪切板访问https或者localhost允许访问   https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html
  const { text, copy, copied, isSupported } = useClipboard()
  // effect(() => {
  //   ElMessage.success(`isSupported:${isSupported}`)
  // })

  console.log('isSupported :>> ', isSupported)
  watch([text, copied], ([newText, newCopied]) => {
    if (newCopied) {
      ElMessage.success(`${newText} 复制成功`)
    }
  })
  const hasReport = (covTask: CovTaskBean) => covTask && covTask.reportPath
  const fullPath = (covTask: CovTaskBean) => useCompleteReportPath(covTask.reportPath)
  const handleCopyLink = (covTask: any) => copy(fullPath(covTask))
  const handleLookReport = (covTask: any) => window.open(fullPath(covTask))

  return { hasReport, isSupportedCopy: isSupported, fullPath, handleCopyLink, handleLookReport }
}

function useCompleteReportPath(reportPath?: string) {
  let result = ''
  if (reportPath) {
    result = reportPath.replace(/http:\/\/(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})(:\d*)/g, '/report')
    result = `http://cake.nicomama.it${result}`
  }
  return result
}
</script>
<style lang="scss" scoped></style>
