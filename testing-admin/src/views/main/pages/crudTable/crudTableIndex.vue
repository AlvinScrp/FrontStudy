<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">新增</el-button>
        <el-popconfirm title="批量删除" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" icon="el-icon-delete" :disabled="chooseData.length === 0">批量删除</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" placeholder="请输入关键词进行检索"></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          class="search-btn"
          @click="handleSearch()"
        >搜索</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @loadTableData="loadTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="名称" align="center" />
        <el-table-column prop="number" label="数字" align="center" />
        <el-table-column prop="chooseName" label="选择器" align="center" />
        <el-table-column prop="radioName" label="单选框" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="删除" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @loadTableData="loadTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import type { LayerInterface } from '@/components/layer/index.vue'
import { selectData, radioData } from './enum'

// 存储搜索用的数据
const query = reactive({
  input: ''
})
// 弹窗控制器
const layer: LayerInterface = reactive({
  show: false,
  title: '新增',
  showButton: true
})
// 分页参数, 供table使用
const page: Page = reactive({index: 1,size: 20,total: 0})
const loading = ref(true)
const tableData = ref([])
const chooseData = ref([])
const handleSelectionChange = (val: never[]) => {
  chooseData.value = val
}
// 获取表格数据
// params <init> Boolean ，默认为false，用于判断是否需要初始化分页
const loadTableData = () => {
  loading.value = true
  let params = {
    page: page.index,
    pageSize: page.size,
    ...query
  }
  getData(params)
    .then(res => {
      let data = res.data.data.list
      if (Array.isArray(data)) {
        data.forEach(d => {
          const select = selectData.find(select => select.value === d.choose)
          select ? d.chooseName = select.label : d.chooseName = d.choose
          const radio = radioData.find(select => select.value === d.radio)
          radio ? d.radioName = radio.label : d.radio
        })
      }
      tableData.value = res.data.data.list
      page.total = Number(res.data.data.pager.total)
    })
    .catch(error => {
      tableData.value = []
      page.index = 1
      page.total = 0
    })
    .finally(() => {
      loading.value = false
    })
}
const handleSearch = () => {
  page.index = 1
  loadTableData()
}
// 删除功能
const handleDel = (data: object[]) => {
  let params = {
    ids: data.map((e: any) => {
      return e.id
    }).join(',')
  }
  del(params)
    .then(res => {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      if (tableData.value.length === 1) {
        page.index = 1
      }
      loadTableData()
    })
}
// 新增弹窗功能
const handleAdd = () => {
  layer.title = '新增数据'
  layer.show = true
  delete layer.row
}
// 编辑弹窗功能
const handleEdit = (row: object) => {
  layer.title = '编辑数据'
  layer.row = row
  layer.show = true
}

onMounted(() => loadTableData())

</script>

<style lang="scss" scoped>
</style>