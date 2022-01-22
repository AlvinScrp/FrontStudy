import request from '@/utils/system/request'
import { AxiosPromise } from 'axios'
import { JacocoResponse, JacocoListResponse, DeployJobBean, ServiceBean, CovTaskBean } from './bean'

/**
 * 服务端接口文档:
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2631
 */

export function loadDeployJobs(params: { projectName?: string;env?:string, pageNo: number; pageSize: number }) {
  return <AxiosPromise<JacocoListResponse<DeployJobBean>>>request({
    url: '/deploy/job/list',
    method: 'get',
    baseURL: '/api',
    params,
  })
}

/**
 * 服务端接口文档:
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2632
 */
export function loadServices(params: { application?: string; pageNo?: number; pageSize?: number }) {
  return <AxiosPromise<JacocoListResponse<ServiceBean>>>request({
    url: '/service/list',
    method: 'get',
    baseURL: '/api',
    params,
  })
}
/**
 * 服务端接口文档:
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2633
 */
export function loadCovTasks(params: { status?: number; application?: string; pageNo: number; pageSize: number }) {
  const all = params.status === -1
  const realParams = all
    ? { pageNo: params.pageNo, pageSize: params.pageSize, application: params.application }
    : params
  console.log('loadCovTasks', realParams)
  return <AxiosPromise<JacocoListResponse<CovTaskBean>>>request({
    url: '/cov/task/list',
    method: 'get',
    baseURL: '/api',
    params: realParams,
  })
}

/**
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2634
 */
export function syncDeployJob() {
  return <AxiosPromise<JacocoResponse>>request({
    url: '/deploy/job/sync',
    method: 'post',
    baseURL: '/api',
  })
}

/**
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2635
 */
export function syncService() {
  return <AxiosPromise<JacocoResponse>>request({
    url: '/service/sync',
    method: 'post',
    baseURL: '/api',
  })
}

/**
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2636
 */
export function buildDeployJob(data: { id: number; jacocoagent: 'yes' | 'no' }) {
  return <AxiosPromise<JacocoResponse>>request({
    url: '/deploy/job/build',
    method: 'post',
    baseURL: '/api',
    data,
  })
}

/**
 * http://showdoc.dev.nicomama.it/web/#/27?page_id=2637
 */
export function generateCovReport(data: { serviceId: number }) {
  console.log('generateCovReport data :>> ', data)
  return <AxiosPromise<JacocoResponse>>request({
    url: '/cov/generate/report',
    method: 'post',
    baseURL: '/api',
    data,
  })
}
