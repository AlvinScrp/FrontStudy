<template>
    <div class="header-info">
        <div class="user-info">
            <div class="user-left">
                <div class="avatar-wrap">
                    <img class="avatar" :src="userInfo?.avatar" />
                </div>
            </div>
            <div class="user-right">
                <div class="line1-wrap">
                    <div class="name-wrap">
                        <p>{{ userInfo?.name }}</p>
                        <img
                            v-if="userInfo?.isVip"
                            class="icon-vip"
                            src="@/assets/img/profile/icon_vip.png"
                        />
                    </div>
                    <img class="icon-setting" src="@/assets/img/profile/icon_profile_setting.png" />
                </div>
                <div class="line2-wrap">
                    <div class="score-tag">京享值</div>
                    <div class="score-tag tag2">
                        小白信用{{ userInfo?.creditScore }}
                        <img
                            class="tag-arrow"
                            src="@/assets/img/profile/icon_profile_arrow_white.png"
                            mode
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="my-fav">
            <div class="fav-item" v-for="(fav,index) in myFav" :key="index">
                <div class="fav-count">{{ fav.count }}</div>
                <div class="fav-label">{{ fav.label }}</div>
            </div>
        </div>
        <div class="plus">
            <div class="plus-left">
                <img class="plus-logo" :src="plus?.logo" />
                <div class="split"></div>
                <span class="plus-tip">{{ plus?.tip }}</span>
            </div>
            <div class="plus-right">
                <span class="look-look">立即查看</span>
                <img class="look-arrow" src="@/assets/img/profile/icon_profile_arrow_black.png" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MyFavBean, PlusBean, UserInfo } from '@/common/bean'
import { profileData } from '@/network/profile'
import { ref, onMounted, computed } from 'vue'

interface HeadInfo {
    userInfo: UserInfo;
    myFav: MyFavBean[];
    plus: PlusBean;
}

const headInfo = ref<HeadInfo>()
const userInfo = computed(() => headInfo.value?.userInfo)
const myFav = computed(() => (headInfo.value?.myFav))
const plus = computed(() => headInfo.value?.plus)
onMounted(() => {
    setTimeout(() => {
        headInfo.value = {
            userInfo: profileData.userInfo,
            myFav: profileData.myFav,
            plus: profileData.plus
        }
    }, 200)
})

</script>
<style lang='less' scoped>
.header-info {
    font-family: "-apple-system,Helvetica,sans-serif";
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0.15rem 0.15rem 0 0.15rem;
    width: 3.75rem;
    height: 2rem;
    background: url("@/assets/img/profile/image_profile_header_shadow.png")
        no-repeat;
    background-size: 100% 100%;

    .user-info {
        width: 100%;
        display: flex;
        flex-direction: row;
        .user-left {
            height: 0.52rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            .avatar-wrap {
                width: 0.52rem;
                height: 0.52rem;
                border-radius: 0.26rem;
                background-color: rgba(255, 255, 255, 0.6);
                padding: 0.02rem;

                .avatar {
                    width: 0.48rem;
                    height: 0.48rem;
                    border-radius: 0.24rem;
                }
            }
        }

        .user-right {
            margin-left: 0.12rem;
            display: flex;
            width: 100%;
            flex-direction: column;
            .line1-wrap {
                flex-direction: row;
                justify-content: space-between;
                display: flex;
                height: 0.24rem;
                .name-wrap {
                    font-size: 0.18rem;
                    line-height: 0.24rem;
                    color: white;
                    display: flex;
                    flex-direction: row;
                    text-align: center;
                    align-items: center;

                    .icon-vip {
                        margin-left: 0.03rem;
                        width: 0.18rem;
                        height: 0.18rem;
                    }
                }
                .icon-setting {
                    width: 0.24rem;
                    height: 0.24rem;
                }
            }
            .line2-wrap {
                margin-top: 0.08rem;
                display: flex;
                flex-direction: row;
                .score-tag {
                    border-radius: 0.1rem;
                    background-color: rgba(0, 0, 0, 0.15);
                    color: white;
                    text-align: center;
                    padding: 0 0.06rem;
                    font-size: 0.1rem;
                    line-height: 0.2rem;
                    height: 0.2rem;
                }
                .tag2 {
                    margin-left: 0.1rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    .tag-arrow {
                        margin-left: 0.02rem;
                        width: 0.08rem;
                        height: 0.08rem;
                    }
                }
            }
        }
    }
    .my-fav {
        margin: 0.2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .fav-item {
            width: 1.15rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .fav-count {
                font-weight: 900;
                color: white;
                font-size: 0.15rem;
            }
            .fav-label {
                margin-top: 0.1rem;
                color: white;
                font-size: 0.12rem;
            }
        }
    }
    .plus {
        height: 0.42rem;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        width: 100%;
        background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png)
            no-repeat 0 0;
        background-size: 100% 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .plus-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            .plus-logo {
                width: 0.57rem;
                height: 0.12rem;
            }
            .split {
                background-color: #ffe678;
                margin-left: 0.1rem;
                margin-right: 0.1rem;
                width: 0.01rem;
                height: 0.08rem;
            }
            .plus-tip {
                font-size: 0.12rem;
                color: #ffe678;
            }
        }

        .plus-right {
            background-image: linear-gradient(-50deg, #ffe36f, #f6d44e);
            border-radius: 0.09rem;
            height: 0.18rem;
            display: flex;
            padding-left: 0.1rem;
            padding-right: 0.04rem;
            flex-direction: row;
            align-items: center;
            .look-look {
                color: #262626;
                font-size: 0.12rem;
            }
            .look-arrow {
                width: 0.14rem;
                height: 0.14rem;
            }
        }
    }
}
</style>
