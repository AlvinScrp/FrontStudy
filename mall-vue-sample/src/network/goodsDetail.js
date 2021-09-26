import { goodsDetailHook } from "./hook/goodsDetailHook"
export function getGoodsDetail(goodsId) {
  // return request({ url: "/home/multidata" })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsDetailHook)
    }, 200)
  })
}