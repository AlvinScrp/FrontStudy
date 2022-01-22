import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import userModule from './mock/user'
import tableModule from './mock/table'
import jacocoMudlue from './mock/jacoco'

export function setupProdMockServer() {
  createProdMockServer([
    ...userModule,
    ...tableModule,
    ...jacocoMudlue
  ])
}
