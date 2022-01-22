<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <el-tooltip content="服务端自己去捞数据" placement="top">
        <el-button @click="handleSync()" icon="el-icon-refresh" type="text">同步数据</el-button>
      </el-tooltip>

      <search-bar initInput="" placeholder="请输入服务名称" @search="search($event)" @reset="resetSearch()" />
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
        >
          <template v-if="column.prop === 'hosts'" v-slot="scope">
            <div v-for="(host, index) in splitHosts(scope.row.hosts)" :key="index">
              {{ host }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" fixed="right" width="240">
          <template #default="scope">
            <el-button type="primary" @click="handleDump(scope.row)">dump</el-button>
            <!-- <el-popconfirm title="dump？" @confirm="handleDump(scope.row)">
              <template #reference>
                <el-button type="primary">dump</el-button>
              </template>
            </el-popconfirm> -->
            <el-button @click="handleOpenDumpResults(scope.row)" type="primary">执行结果列表</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import Table from '@/components/table/index.vue'
import { Page, Column } from '@/components/table/type'
import SearchBar from '../common/searchBar.vue'
import { generateCovReport, loadServices, syncService } from '@/api/jacoco'
import { ServiceBean } from '@/api/bean'
import { formatDate } from '@/utils/share/dateUtils'
import { useSearch } from '../common/search'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const { tableColumns } = useTableConfig()
const { page, loading, tableData, loadTableData } = usePageData()
const { searchKey, search, resetSearch } = useSearch(page, loadTableData)

const { handleSync, handleDump, handleOpenDumpResults } = useTableHandle()
const splitHosts = (hosts: string) => hosts.split(',')

onMounted(() => loadTableData())

function useTableConfig() {
  const formatType = (row: ServiceBean) => (row.type == 1 ? 'web' : row.type == 2 ? 'dubbo' : '未知')
  const formatStatus = (row: ServiceBean) => (row.status == 1 ? '在线' : row.status == 2 ? '离线' : '未开发')
  const formatUpdateTime = (row: ServiceBean) => formatDate(row.updateTime)
 
  const tableColumns: Column[] = [
    { fixed: true, prop: 'id', label: 'ID', width: 70 },
    { fixed: true, prop: 'application', label: '服务名称', minWidth: 180 },
    { prop: 'hosts', label: 'host端口', minWidth: 180 },
    { prop: 'type', label: 'service类型', width: 100, formatter: formatType },
    { prop: 'env', label: '当前环境', width: 80 },
    { prop: 'status', label: '状态', width: 100, formatter: formatStatus },
    { prop: 'updateTime', label: '更新时间', width: 180, formatter: formatUpdateTime },
  ]
  return { tableColumns }
}

function usePageData() {
  // const query = reactive({ input: '' }) //存储搜索项目名称
  const page: Page = reactive({ index: 1, size: 20, total: 0 })
  const loading = ref(true)
  const tableData = ref<Array<ServiceBean>>([])

  // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
  const loadTableData = () => {
    loading.value = true
    // query.input = 'message-consumer'
    let params = {
      application: searchKey.value,
      pageNo: page.index,
      pageSize: page.size,
    }
    loadServices(params)
      .then((res) => {
        console.log('res.data.data.length :>> ', res.data.data.length)
        tableData.value = res.data.data
        page.total = res.data.pageBean.total
      })
      .catch((error) => {
        console.log('load services error :>> ', error)
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

function useTableHandle() {
  const router = useRouter()
  return {
    handleSync: () => {
      syncService().then(() => ElMessage.success('正在同步中...'))
    },
    handleDump: (service: any) => {
      generateCovReport({ serviceId: service.id })
        .then(() => ElMessage.success('正在生成覆盖率报告'))
        .catch((error) => {
          // ElMessage.error(error.msg)
        })
    },
    handleOpenDumpResults: (service: any) => {
      ElMessage.success('TODO：带上应用名称，调整覆盖率报告列表')
      router.push({
        path: '/jacoco/cov-tasks',
        query: { application: service.application },
      })
    },
  }
}
</script>

<style lang="scss" scoped></style>
