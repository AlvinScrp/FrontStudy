import { shopcartRes } from '@/network/shopcart'
export default {
    namespaced: true,
    state() {
        return {
            shopGoods: [],
            total: {
                price: 100,
                disCount: 50,
                goodsCount: 100
            }

        }
    },
    getters: {
        cartTotal(state) {
            return state.total
        },
        isAllSelected(state) {
            for (var item of state.shopGoods) {
                for (var goods of item.goodsList) {
                    if (!goods.selected) {
                        return false
                    }
                }
            }
            return true
        }
    },
    mutations: {
        initShopcartXX(state, { shopGoods }) {
            state.shopGoods = shopGoods
        },
        incrementGoods(state, { shopId, goodsId, value }) {
            const goods = state.shopGoods.find(item => item.shop.id === shopId).goodsList.find(goods => goods.id === goodsId)
            if (goods) goods.count += value
        },
        decrementGoods(state, { shopId, goodsId, value }) {
            const goods = state.shopGoods.find(item => item.shop.id === shopId).goodsList.find(goods => goods.id === goodsId)
            if (goods) goods.count -= value
        },
        removeGoods(state, { shopId, goodsId }) {
            console.log('removeGoods', shopId, goodsId)
            const goodsList = state.shopGoods.find(item => item.shop.id === shopId).goodsList
            const index = goodsList.findIndex(goods => goods.id === goodsId)
            console.log('index,goodsList', index, goodsList)
            if (index >= 0) {
                console.log('removeGoods  goodsList.slice', index)
                goodsList.splice(index, 1)
            }
            console.log(goodsList)
        },
        selectAll(state, { selected }) {
            for (var item of state.shopGoods) {
                for (var goods of item.goodsList) {
                    if (goods.selected !== selected) {
                        goods.selected = selected
                    }
                }
            }
        },

        selectGoods(state, { shopId, goodsId, selected }) {
            console.log('selectGoods')
            const goods = state.shopGoods.find(item => item.shop.id === shopId).goodsList.find(goods => goods.id === goodsId)
            if (goods) goods.selected = selected
        },

        updateTotal(state) {
            let price = 0
            let disCount = 0
            let goodsCount = 0

            for (var item of state.shopGoods) {
                for (var goods of item.goodsList) {
                    if (goods.selected) {
                        price += goods.price * goods.count
                        disCount += (goods.originPrice - goods.price)
                        goodsCount += goods.count
                    }
                }
            }
            state.total = { price, disCount, goodsCount }
        }
    },

    actions: {
        initShopcart({ commit }) {
            console.log('initShopcart')
            setTimeout(() => {
                console.log(shopcartRes)
                commit('initShopcartXX', { shopGoods: shopcartRes })
                commit('updateTotal')
            }, 100)
        },
        incrementGoods({ commit }, { shopId, goodsId, value }) {
            setTimeout(() => {
                commit('incrementGoods', { shopId, goodsId, value })
                commit('updateTotal')
            }, 100)
        },
        decrementGoods({ commit }, { shopId, goodsId, value }) {
            setTimeout(() => {
                commit('decrementGoods', { shopId, goodsId, value })
                commit('updateTotal')
            }, 100)
        },
        removeGoods({ commit }, { shopId, goodsId }) {
            setTimeout(() => {
                commit('removeGoods', { shopId, goodsId })
                commit('updateTotal')
            }, 100)
        },

        selectGoods({ commit }, { shopId, goodsId, selected }) {
            setTimeout(() => {
                commit('selectGoods', { shopId, goodsId, selected })
                commit('updateTotal')
            }, 100)
        },
        selectAll({ commit }, { selected }) {
            setTimeout(() => {
                commit('selectAll', { selected })
                commit('updateTotal')
            }, 100)
        },
        checkout({ commit }) {
            console.log('checkout ')
        }

    }

}
