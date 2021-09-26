import { request } from "./network";
import { goodsDataHook } from "./hook/goodsDataHook"
import { homeDataHook } from "./hook/homeDataHook"
export function getHomeMultiData() {
  // return request({ url: "/home/multidata" })
  return new Promise((resolve, rekect) => {
    setTimeout(() => {
      resolve(homeDataHook)
    }, 100)
  })
}

export function getGoodsData(type, page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsDataHook[type][page])
    }, 100)
  })
  // return request({
  //   url: '/home/data', params: { type, page }
  // })
}