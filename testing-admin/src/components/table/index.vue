<template>
  <div class="system-table-box">
    <el-table
      v-bind="$attrs"
      class="system-table"
      height="100%"
      border
      :data="data"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" width="50" v-if="showSelection" />
      <el-table-column fixed label="序号" width="60" align="center" v-if="showIndex">
        <template #default="scope">{{ (page.index - 1) * page.size + scope.$index + 1 }}</template>
      </el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination
      v-if="showPage"
      v-model:current-page="page.index"
      class="system-page"
      background
      :layout="pageLayout"
      :total="page.total"
      :page-size="page.size"
      :page-sizes="pageSizes"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults, ref } from 'vue'
import { Page } from '@/components/table/type'
const props = withDefaults(defineProps<{
  data: any[] | undefined,
  select: any[] | undefined,
  showIndex: boolean | undefined,
  showSelection: boolean | undefined,
  showPage: boolean | undefined,
  page: Page | undefined,
  pageLayout: string | undefined,
  pageSizes: Array<number> | undefined
}>(), {
  data: () => [],
  select: () => [],
  showIndex: false,
  showSelection: false,
  showPage: true,
  pageLayout: 'total, sizes, prev, pager, next, jumper',
  pageSizes: () => [10, 20, 50, 100],
  page: () => ({ index: 1, size: 20, total: 0 })
})
const emit = defineEmits<{
  (e: 'loadTableData'): void,
  (e: 'selection-change', val: never[]): void,
  (e: 'update:page', page: Page): void,
}>()
const page = ref(props.page)
let timer: any = null
// 分页相关：监听页码切换事件
const handleCurrentChange = (index: number) => {
  console.log(`handleCurrentChange: ${index}`)
  page.value.index = timer ? 1 : index
  emit('update:page', page.value)
  emit('loadTableData')
}
// 分页相关：监听单页显示数量切换事件
const handleSizeChange = (size: number) => {
  timer = 'work'
  setTimeout(() => { timer = null }, 100)
  console.log(`handleSizeChange: ${size}`)
  page.value.size = size
  page.value.index = 1
  emit('update:page', page.value)
  emit('loadTableData')
}
// 选择监听器
const handleSelectionChange = (val: []) => emit('selection-change', val)

</script>

<style lang="scss" scoped>
.system-table-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  .system-table {
    flex: 1;
    height: 100%;
  }

  .system-page {
    margin-top: 20px;
  }
}
</style>