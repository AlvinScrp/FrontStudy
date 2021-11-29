export interface Goods {
    goodsId: number;
    image: string;
    sellPrice: number;
    stock: number;
    title1: string;
    title2: string;
}

export interface Banner {
    acm: number;
    height: number;
    height923: number;
    image: string;
    image923: string;
    link: string;
    title: string;
    width: number;
    width923: number;
}
export interface Recommend {
    acm: number;
    image: string;
    link: string;
    sort: number;
    title: string;
}

export interface HomeData {
    banner: { list: Array<Banner> };
    recommend: { list: Array<Recommend> };
}
export interface ShopGoods {
    id: number;
    name: string;
    image: string;
    tagText: string;
    tagStype: number;
    sku: { id: number, name: string }[];
    activityNotice: string[];
    price: number;
    originPrice: number;
    count: number;
    selected: boolean;
    discount: { tip: string };
}
export interface Shop {
    id: number;
    name: string;
    shopClickable: boolean;
    hasCoupon: boolean;
    courierFeeTip: string;
    activityTip: string;
}

export interface ShopCart {
    shop: Shop;
    goodsList: Array<ShopGoods>;
}

export interface UserInfo {
    avatar: string;
    name: string;
    creditScore: string;
    isVip: boolean;
}
export interface MyFavBean {
    label: string;
    count: number;
}
export interface PlusBean {
    logo: string;
    tip: string;
}
export interface OrderItemBean {
    label: string;
    icon: string;
    count: number;
}
export interface LogisticsItemBean {
    image: string;
    count: number;
    state: { type: string, date: string };
    text: string;
}

export interface MyOrderBean {
    orderAllIcon: string;
    orderList: Array<OrderItemBean>;
    logisticsList: Array<LogisticsItemBean>;
}

export interface WalletItemBean {
    text: string;
    label: string;
}
export interface ToolItemBean {
    image: string;
    label: string;
}

// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface GoodsDetailBean {
    id: number;
    goodsId: number;
    pictures: string[];
    categoryName: string;
    systemTime: number;
    savePrice: number;
    appPrice: number;
    postage: number;
    createTime: string;
    subName: string;
    sellPrice: number;
    v: number;
    activityBuyLimit: number;
    activityStartTime: number;
    activityFreeShipping: number;
    activityId: number;
    activityLabel: string;
    activityStatus: number;
    activityEndTime: number;
    secKill: boolean;
    stock: number;
    sales: number;
    goodsTags: GoodsTag[];
    priceMap: PriceMap;
    details: string;
    goodsExtends: GoodsExtends;
    remindState: number;
    labels: Label[];
    discountInfo: DiscountInfo;
    name: string;
    restriction: number;
    activityJoinUser: number;
    status: number;
    extension: string;
    hiddenOnSaleTime: number;
    virtual: boolean;
    skus: GoodsDetailSku[];
    sellerCode: string;
    freightId: number;
    testStatus: number;
    selfFlag: number;
    existSku: boolean;
    addCart: number;
    isShield: number;
    goodsPropVos: GoodsPropVo[];
    category: string;
    categoryId: number;
    haitaoMall: boolean;
}

export interface DiscountInfo {
    '3': The3;
}

export interface The3 {
    campaignGuide: string;
    campaignId: number;
    rulesDesc: string;
    campaignLink: string;
}

export interface GoodsExtends {
    TIMELIMIT_ACTIVITY_V2: TimelimitActivityV2;
}

export interface TimelimitActivityV2 {
    skus: TimelimitActivityV2Sku[];
    goodsId: number;
    activityName: string;
    startTime: number;
    endTime: number;
    label: string;
    status: number;
}

export interface TimelimitActivityV2Sku {
    sellPrice: number;
    skuId: number;
}

export interface GoodsPropVo {
    optionNames: string[];
    propOrderNo: number;
    propName: string;
}

export interface GoodsTag {
    tagName: string;
}

export interface Label {
    labelName: string;
}

export interface PriceMap {
    originSellPrice: number;
    oldUserAppPrice: number;
    memberPrice: number;
    newUserAppPrice: number;
}

export interface GoodsDetailSku {
    skusExtends: SkusExtends;
    inclusiveTax: number;
    priceMap: PriceMap;
    sales: number;
    appPrice: number;
    sellerCode: string;
    taxLevel: number;
    optionCode: string;
    price: number;
    id: number;
    stock: number;
}

export interface SkusExtends {
    TIMELIMIT_ACTIVITY_V2: TimelimitActivityV2Sku;
}

export interface GoodsVipBean {
    discount: { forMember: number, forFirstOrder: number };
    memberPrice: number;
    sellPrice:number;
    memberRightsUrl:string;
}