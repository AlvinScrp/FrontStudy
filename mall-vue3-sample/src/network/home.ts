// import { request } from './network'
import { Goods, HomeData } from '@/common/bean'
import { goodsDataHook } from './hook/goodsDataHook'
import { homeDataHook } from './hook/homeDataHook'

export async function getHomeMultiData(){
    // return request({ url: "/home/multidata" })
    return new Promise<HomeData>((resolve) => {
        setTimeout(() => {
            const homeData =<HomeData><unknown>homeDataHook.data
            resolve(homeData)
        }, 100)
    })
}

export  async function getGoodsData(type: string, page: number) {
    return new Promise<Goods[]>((resolve) => {
        setTimeout(() => {
            const list =
                type === 'pop'
                    ? goodsDataHook.pop
                    : type === 'new'
                    ? goodsDataHook.new
                    : goodsDataHook.sell
            resolve(list[page])
        }, 100)
    })
    // return request({
    //   url: '/home/data', params: { type, page }
    // })
}
