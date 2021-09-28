import { goodsDetailHook } from "./hook/goodsDetailHook"
import { goodsRichText } from "./hook/goodsRichTextHook";
export function getGoodsDetail(goodsId) {
  // return request({ url: "/home/multidata" })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsDetailHook)
    }, 200)
  })
}
export function getGoodsRichText(goodsId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsRichText)
    }, 200)
  })
}
