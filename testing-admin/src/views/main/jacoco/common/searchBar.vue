<template>
  <div class="layout-container-form-search">
    <el-input v-model="input" :placeholder="placeHolder"></el-input>
    <el-button type="primary" icon="el-icon-search" class="search-btn" @click="$emit('search', input)">搜索</el-button>
    <el-button type="primary" icon="el-icon-hot-water" class="search-btn" @click="reset()">重置</el-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
const props = defineProps<{ initInput: string; placeHolder?: string }>()
const emit = defineEmits<{
  (e: 'search', key: string): void
  (e: 'reset'): void
}>()
const input = ref(props.initInput)
watch(
  () => props.initInput,
  (newValue) => (input.value = newValue)
)
const reset = () => {
  input.value = ''
  emit('reset')
}
</script>
<style lang="less" scoped></style>
