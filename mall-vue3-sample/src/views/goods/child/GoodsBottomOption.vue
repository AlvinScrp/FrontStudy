<template>
    <div class="out-wrapper">
        <div class="wrapper">
            <div class="nav-icon">
                <i class="ic iconfont mall-online-service"></i>
                <p class="label">客服</p>
            </div>
            <div class="nav-icon">
                <i class="ic iconfont mall-home"></i>
                <p class="label">商城</p>
            </div>
            <div class="nav-icon">
                <i class="ic iconfont mall-shopcar"></i>
                <p class="label">购物车</p>
            </div>
            <div class="goods-opt">
                <span class="add-shopcar">加入购物车</span>
                <span class="buy">立即购买</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.out-wrapper {
    width: 100%;
    z-index: 1;
    background-color: white;
    padding-top: 0.1rem;
    padding-bottom: 0.25rem;
}
.wrapper {
    width: 100%;
    height: 0.48rem;
    display: flex;
    align-items: center;

    .nav-icon {
        flex-grow: 1;
        background-color: white;
        padding: 0.05rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        .ic {
            font-size: 0.18rem;
            color: #666;
            display: inline-block;
        }
        .label {
            margin-top: 0.03rem;
            font-size: 0.12rem;
            color: #666;
            display: inline-block;
            transform: scale(0.83);
            transform-origin: 50% 50%;
            display: inline-block;
        }
    }
    .goods-opt {
        padding: 0 0.15rem;

        .add-shopcar {
            display: inline-block;
            box-sizing: border-box;
            line-height: 0.4rem;
            background-color: #333;
            font-size: 0.14rem;
            padding: 0 0.15rem;
            color: white;
            border-radius: 0.2rem 0 0 0.2rem;
        }
        .buy {
            box-sizing: border-box;
            display: inline-block;
            line-height: 0.4rem;
            background: linear-gradient(90deg, #ff6381, #ff2b54);
            font-size: 0.14rem;
            color: white;
            padding: 0 0.15rem;
            border-radius: 0 0.2rem 0.2rem 0;
        }
    }
}
</style>
