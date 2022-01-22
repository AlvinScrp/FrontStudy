export interface JacocoResponse {
  code: number
  msg: string
}
export interface JacocoListResponse<T> extends JacocoResponse {
  data: Array<T>
  pageBean: { pageNo: number; pageSize: number; total: number; pages: number }
}
export interface DeployJobBean {
  id: number
  jobName: string
  projectName: string
  gitUrl: string
  pomPath: string
  servicePort: string
  webPort: string
  branch: string
  host: string
  tag: string
  env: string
  createTime: number
  updateTime: number
}
export interface ServiceBean {
  id: number
  application: string
  env: string
  hosts: string
  type: number
  status: number
  lastSyncTime: number
  createTime: number
  updateTime: number
}
export interface CovTaskBean {
  id: number
  application: string
  status: number
  result: number
  reportPath: string
  beginTime: number
  endTime: number
  remark: string
  createTime: number
  updateTime: number
}
