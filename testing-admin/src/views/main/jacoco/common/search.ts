import { ref, UnwrapNestedRefs } from 'vue'
import { Page } from '@/components/table/type'
export function useSearch(page: UnwrapNestedRefs<Page>, loadTableDataFn: () => void) {
  const searchKey = ref('')
  const search = (key: string) => {
    searchKey.value = key
    page.index = 1
    loadTableDataFn()
  }
  const resetSearch = () => {
    searchKey.value = ''
    page.index = 1
    loadTableDataFn()
  }

  return { searchKey, search, resetSearch }
}
