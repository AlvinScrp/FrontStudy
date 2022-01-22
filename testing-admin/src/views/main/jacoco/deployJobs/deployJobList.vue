<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <el-tooltip content="服务端自己去捞数据" placement="top">
        <el-button @click="handleSync()" icon="el-icon-refresh" type="text">同步数据</el-button>
      </el-tooltip>
      <el-radio-group v-model="envCurrent.label">
        <el-radio-button
          v-for="(envBean, index) in envBeans"
          :key="index"
          :label="envBean.label"
          @click="onEnvSelected(envBean)"
          >{{ envBean.label }}
        </el-radio-button>
      </el-radio-group>

      <search-bar initInput="" placeholder="请输入项目名称" @search="search($event)" @reset="resetSearch()" />
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
        <el-table-column label="操作" align="center" fixed="right" width="220">
          <template #default="scope">
            <el-button :disabled="scope.row.env === 'pro'" type="primary" @click="handleDeploy(scope.row, true)"
              >jacoco发布</el-button
            >
            <el-button :disabled="scope.row.env === 'pro'" @click="handleDeploy(scope.row, false)">发布</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, UnwrapNestedRefs } from 'vue'
import Table from '@/components/table/index.vue'
import SearchBar from '../common/searchBar.vue'
import { Page, Column } from '@/components/table/type'
import { buildDeployJob, loadDeployJobs, syncDeployJob } from '@/api/jacoco'
import { DeployJobBean } from '@/api/bean'
import { useSearch } from '../common/search'
import { ElMessage } from 'element-plus'

const { tableColumns } = useTableConfig()
const { page, loading, tableData, loadTableData } = usePageData()
const { searchKey, search, resetSearch } = useSearch(page, loadTableData)
const { envCurrent, envBeans, onEnvSelected } = useEnvBar(page, loadTableData)
const { handleSync, handleDeploy } = useTableHandle()
onMounted(() => loadTableData())

function useTableConfig() {
  const tableColumns: Column[] = [
    { fixed: true, prop: 'id', label: 'ID', width: 70 },
    { fixed: true, prop: 'jobName', label: '任务名称', width: 180 },
    { prop: 'projectName', label: '项目名称', width: 150 },
    { prop: 'servicePort', label: '默认端口', width: 70 },
    { prop: 'pomPath', label: 'Pom_Path', width: 200 },
    { prop: 'branch', label: '基础版本', width: 70 },
    { prop: 'env', label: '当前环境', width: 70 },
    { prop: 'gitUrl', label: 'Git_url', minWidth: 350 },
  ]
  return { tableColumns }
}

function useEnvBar(page: UnwrapNestedRefs<Page>, loadTableDataFn: () => void) {
  interface EnvBean {
    label: string
    value: string
  }

  const envBeans: EnvBean[] = [
    { label: '全部环境', value: '' },
    { label: '线上pro', value: 'pro' },
    { label: '测试beta', value: 'beta' },
    { label: '开发dev', value: 'dev' },
  ]
  const envCurrent = ref(envBeans[2])

  const onEnvSelected = (envBean: EnvBean) => {
    page.index = 1
    envCurrent.value = envBean
    loadTableDataFn()
  }
  return { envCurrent, envBeans, onEnvSelected }
}

function usePageData() {
  const page: Page = reactive({ index: 1, size: 20, total: 0 })
  const loading = ref(true)
  const tableData = ref<Array<DeployJobBean>>([])

  const loadTableData = () => {
    loading.value = true
    let params = {
      projectName: searchKey.value,
      env: envCurrent.value.value,
      pageNo: page.index,
      pageSize: page.size,
    }
    loadDeployJobs(params)
      .then((res) => {
        console.log('res.data.data.length :>> ', res.data.data.length)
        tableData.value = res.data.data
        page.total = res.data.pageBean.total
      })
      .catch((error) => {
        console.log('load deploy jobs error :>> ', error)
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
  return {
    handleDeploy: (job: any, useProxy: boolean) => {
      console.log('handleDeploy')
      buildDeployJob({ id: job.id, jacocoagent: useProxy ? 'yes' : 'no' })
        .then(() => ElMessage({ message: '部署中...', type: 'success' }))
        .catch((error) => {
          // ElMessage.error(error.msg)
        })
    },
    handleSync: () => {
      syncDeployJob().then(() => ElMessage({ message: '开启同步', type: 'success' }))
    },
  }
}
</script>

<style lang="scss" scoped></style>
