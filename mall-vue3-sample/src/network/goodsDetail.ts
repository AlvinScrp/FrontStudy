import { GoodsDetailBean } from '@/common/bean'
import { goodsDetailHook } from './hook/goodsDetailHook'
import { goodsRichText } from './hook/goodsRichTextHook'

export async function getGoodsDetail(goodsId: number): Promise<GoodsDetailBean> {
    // return request({ url: "/home/multidata" })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = <GoodsDetailBean>goodsDetailHook
            resolve(res)
        }, 200)
    })
}
export async function getGoodsRichText(goodsId: number, timeOut: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(goodsRichText.data)
        }, 200 + timeOut)
    })
}
