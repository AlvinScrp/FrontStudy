var imageIndex = 0
var imageUrls = [
    "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100013404334/FocusFullshop/CkRqZnMvdDEvMTk2NzY3LzM0LzEyMjA3LzE4ODE0NS82MGU2OTQzY0VlYzFkNWUyMC84MTA3MDYyYWRmOGM2YzZhLnBuZxIJMy10eV8wXzU0MAI47ot6QhMKD-iVieS4i-WkqumYs-S8nhAAQhYKEueyvuW9qeS4jeWuuemUmei_hxABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWK7hjcr0Ag/cr/s/q.jpg",
    "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/189991/39/15524/95184/6102196bE8d669f0f/83cbafa62a868f86.jpg.webp",
    "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100016341998/FocusFullshop/CkRqZnMvdDEvMTkzOTU0LzMxLzEyMzEwLzYzMDM5Ny82MGU2ZTVmYUU4ZDQ3YTQ5NS81ZmYzOTZlMzY4Y2Y1OGZiLnBuZxIJMi10eV8wXzUzMAI47ot6QhYKEumHkeWtl-eGn-mjn-iFiuWRsxAAQhkKFeeJqee-juminOmrmOS7t-abtOW7iRABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWO6Hwcv0Ag/cr/s/q.jpg",
    "https://imgcps.jd.com/ling4/100010702011/5bel5Lia6L-Q5Yqo5Lya/5oqi5Yi4MjAw5YePNTA/p-5bd8253082acdd181d02fa37/1222da2e/cr/s/q.jpg",
    "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/177484/29/8372/69340/60c06387E40d7008f/5568d4689c3a33eb.jpg.webp",
]

var seckillGoodsList = [
    {
        title: "春暁偏硅酸矿泉水整箱小瓶装水高端饮用水家庭用水活动会议矿泉水550ml装 550ml*24瓶",
        imageUrl: "https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/199054/28/1363/218682/61090ef0E2b538877/61eb03a6a7158bae.png.webp",
        sellPrice: "47.90",
        originPrice: "59.90"
    },
    {
        title: "日本亲皙（ARAU）婴儿洗衣液 天然植物精华 无需柔顺剂 替换补充装720ml*2 （莎罗雅saraya）【原装进口】",
        imageUrl: "https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/184043/17/17625/136734/610a3aabEac474d2a/afbe81c3e07130fe.jpg.webp",
        sellPrice: "15.90",
        originPrice: "45.00"
    },
    {
        title: "荣耀50 5g手机 1亿像素超清影像 66W超级充电【6期免息】 亮黑色 8GB 256GB【69%客户的选择】",
        imageUrl: "http://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/187284/17/16666/154294/61091ce6Ea50ba640/36e7a310f3cb9dbf.jpg.webp",
        sellPrice: "2989.00",
        originPrice: "3999.00"
    },
    {
        title: "风味坐标 手撕牛肉干 400g(经典原味)  内蒙古锡林浩特特产 清真食品 休闲零食 京东京造",
        imageUrl: "https://img20.360buyimg.com/seckillcms/s280x280_jfs/t1/189771/6/16775/123400/610a0ea7Ea082f229/b99c3704adc22af3.jpg.webp",
        sellPrice: "69.90",
        originPrice: "229.00"
    },
    {
        title: "大红门 香卤猪头肉 450g 冷藏熟食 精选猪肉 北京老字号",
        imageUrl: "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/156886/25/14509/108825/6047253cE6ae5531f/3c732573f85f6457.jpg.webp",
        sellPrice: "19.90",
        originPrice: "47.80"
    },
    {
        title: "维达（Vinda）蓝色经典卷纸4层加厚200克27卷 有芯卷筒纸巾厕纸手纸卫生纸 整箱",
        imageUrl: "https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/198207/22/202/183660/6100e6f0E1102fb56/9401eff2f270d2c9.jpg.webp",
        sellPrice: "77.90",
        originPrice: "159.00"
    },
    {
        title: "美的（Midea）挂烫机家用 熨斗 蒸汽挂烫机 双杆手持熨烫机电熨斗YGD20D7（2L双杆）",
        imageUrl: "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/180858/20/17510/189565/610a51d0Eeba4da57/2a6abe50b4b9e74e.jpg.webp",
        sellPrice: "279.00",
        originPrice: "329.00"
    },
    {
        title: "佳明（GARMIN）Tactical迷彩黑礼盒装户外GPS蓝牙多功能跑步智能运动手表心率北斗气压高度计防水手表",
        imageUrl: "https://img14.360buyimg.com/seckillcms/s280x280_jfs/t1/198820/24/1189/137793/6107c5adEdffcc8ea/48e3f4bce7448b72.png.webp",
        sellPrice: "1880.00",
        originPrice: "2180.00"
    },
    {
        title: "Redmi Note 9 Pro 5G 一亿像素 骁龙750G 33W快充 120Hz刷新率 静默星空&nbsp;8GB+256GB 游戏智能手机 小米 红米",
        imageUrl: "https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/184090/11/17404/52224/610a07c3Ef52bbcff/eaf499895aeaf76d.jpg.webp",
        sellPrice: "1769.00",
        originPrice: "1999.00"
    },
    {
        title: "美的（Midea）移动空调1.5匹  家用厨房空调冷暖一体机便携立式免排水免安装 KYR-35/N1Y-PD2",
        imageUrl: "https://img14.360buyimg.com/seckillcms/s280x280_jfs/t1/182936/21/17614/97731/610a511dE31069477/6c1660edcf81b677.jpg.webp",
        sellPrice: "1999.00",
        originPrice: "2499.00"
    },
    {
        title: "爷爷的农场欧洲进口橄榄油特级初榨餐食用油500ml",
        imageUrl: "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/186979/7/16116/47100/61076145Ee8fa8cb3/7bb54f2706b1196a.jpg.webp",
        sellPrice: "98.00",
        originPrice: "188.00"
    },
    {
        title: "恒大冰泉 长白山天然弱碱性矿泉水 500ml*24瓶 整箱装",
        imageUrl: "https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/131348/4/8764/59089/5f4cb1e2E925a0894/1cce5c6396efcece.jpg.webp",
        sellPrice: "39.90",
        originPrice: "48.00"
    },
]

var nicegoodsList = [
    {
        title: "梦先森 新鲜 红毛丹",
        imageUrl: "https://img10.360buyimg.com/ceco/s150x150_jfs/t1/162251/26/12329/192741/604c78d3E330f35b2/5fcdaf10e4197522.jpg!q70.jpg.webp"
    },
    {
        title: "耐克 缓震 跑步鞋",
        imageUrl: "https://img13.360buyimg.com/ceco/s150x150_jfs/t1/49863/13/2743/66928/5d087656E5d49af28/888e93e248bf7f28.jpg!q70.jpg.webp"
    },
    {
        title: "鲜嫩清甜脆 新鲜嫩莲蓬",
        imageUrl: "https://img10.360buyimg.com/mobilecms/s150x150_jfs/t21814/127/407192926/177722/51b01255/5b0d07b5N78a02dd1.jpg!q70.jpg.webp"
    },
    {
        title: "Tommy 拼色条纹 POLO衫",
        imageUrl: "https://img30.360buyimg.com/ceco/s150x150_jfs/t1/186139/36/7895/69234/60be0b52Ea460572b/02fa1d46f7b955a7.jpg!q70.jpg.webp"
    },
    {
        title: "微软 Series X 家庭娱乐游戏机",
        imageUrl: "https://img20.360buyimg.com/ceco/s150x150_jfs/t1/188900/23/12252/41567/60e6d922E1a808b7e/c1230812d90bbec6.jpg!q70.jpg.webp"
    },
    {
        title: "夏娃之秀 刺绣聚拢 内衣",
        imageUrl: "https://img14.360buyimg.com/ceco/s150x150_jfs/t1/139197/14/8163/250571/5f59f4e0E9909030b/a85e63029d7ef976.jpg!q70.jpg.webp"
    },
    {
        title: "李宁 吸湿PU 篮球",
        imageUrl: "https://img14.360buyimg.com/ceco/s150x150_jfs/t1/159722/38/5682/268261/601a43e3E78cbacb6/60bdf8c1c170c8ae.jpg!q70.jpg.webp"
    },
    {
        title: "鱼官儿 美丽易饲养 红樱桃灯",
        imageUrl: "https://img14.360buyimg.com/ceco/s150x150_jfs/t1/179015/9/8530/39895/60c1a3f0Ea4d5ec5c/7b43aa0a2c4fb573.jpg!q70.jpg.webp"
    },
    {
        title: "雅迪 双重减震 电动车",
        imageUrl: "https://img11.360buyimg.com/ceco/s150x150_jfs/t1/126663/31/12341/83168/5f58b7fbE1e7b3333/f0c9c03054652024.jpg!q70.jpg.webp"
    },
    {
        title: "YAMAHA雅马哈 福喜巧格 摩托车",
        imageUrl: "https://img10.360buyimg.com/ceco/s150x150_jfs/t1/163961/2/8010/73727/60376797E4f8bb1e0/dad1aaeed018fea2.jpg!q70.jpg.webp"
    }

]

var handleLoad = true

window.onload = function () {
    // if (!handleLoad) return

    initFirstScreenSlider();

    var serviceLinks = document.getElementsByClassName("service_link")
    for (var i = 0; i < serviceLinks.length; i++) {
        monitorServicelinkMouseover(serviceLinks[i])
    }

    setInterval(() => updateSeckillCountdown(), 1000)


    initSeckillSlider();

    initNiceGoodsSlider();

    monitorScroll();

}

function initFirstScreenSlider() {
    var sliderImageContainer = document.getElementById("id_slider_image_container")
    var sliderImages = sliderImageContainer.getElementsByTagName("a");
    for (var i = 0; i < sliderImages.length; i++) {
        // console.log(i)
        sliderImages[i].style.opacity = 0.0
        sliderImages[i].style.backgroundImage = "url(" + imageUrls[i] + ")"
        sliderImages[i].style.backgroundSize = "100% 100%"
    }
    switchImageFunc(false)
    setInterval(() => switchImageFunc(true), 2000)
}

function switchImageFunc(fadeOutPre) {
    var sliderImageContainer = document.getElementById("id_slider_image_container")
    var sliderImages = sliderImageContainer.getElementsByTagName("a");
    if (fadeOutPre) {
        var pre = sliderImages[(imageIndex + 4) % imageUrls.length]
        pre.style.animation = "fadeOut 0.3s 1 normal ease-out forwards"
    }
    var current = sliderImages[imageIndex]
    // console.log("imageIndex:" + imageIndex + "  opacity:" + current.style.opacity)
    current.style.animation = "fadeIn 0.3s 1 normal ease-in forwards"

    imageIndex++;
    imageIndex = imageIndex % imageUrls.length;

}

function monitorServicelinkMouseover(serviceLink) {
    var normalImg = serviceLink.getElementsByClassName("service_ico")[0]
    var hightlightImg = serviceLink.getElementsByClassName("service_ico_highlight")[0]
    serviceLink.onmouseover = () => {
        changeServiceLinkStyle(normalImg, hightlightImg, true)
    }
    serviceLink.onmouseout = () => {
        changeServiceLinkStyle(normalImg, hightlightImg, false)
    }

}

function changeServiceLinkStyle(normalImg, hightlightImg, over) {
    normalImg.style.opacity = over ? 0.0 : 1.0
    normalImg.style.visibility = over ? "hidden" : "visible"
    hightlightImg.style.opacity = over ? 1.0 : 0.0
    hightlightImg.style.visibility = over ? "visible" : "hidden"
}

function updateSeckillCountdown() {
    var now = new Date()
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)

    var leaveSecond = parseInt((end.getTime() - now.getTime()) / 1000)
    // console.log(leaveSecond)

    var hour = parseInt(leaveSecond / 3600)
    var minute = parseInt((leaveSecond / 60) % 60)
    var second = parseInt(leaveSecond % 60)


    var timerHour = document.getElementById("countdown_timer_hour")
    var timerMinute = document.getElementById("countdown_timer_minute")
    var timerSecond = document.getElementById("countdown_timer_second")

    timerHour.innerText = hour < 10 ? ("0" + hour) : hour
    timerMinute.innerText = minute < 10 ? ("0" + minute) : minute
    timerSecond.innerText = second < 10 ? ("0" + second) : second
}

var seckillItemSize = 12;
var seckillItemPerPage = 4;
var seckillItemWidth = 200;
function initSeckillSlider() {
    //slider list items
    var slider = document.getElementById("id_seckill_slider")
    var sliderItems = document.getElementsByClassName("seckill_slider_item")
    var cloneItem = sliderItems[0].cloneNode(true)
    for (var i = 0; i < sliderItems.length; i++) {
        slider.removeChild(sliderItems[i])
    }
    sliderCount = seckillItemSize + 8
    for (var i = -4; i < seckillItemSize + 4; i++) {
        var index = (i + seckillItemSize) % seckillItemSize
        var goods = seckillGoodsList[index]
        var newItem = cloneItem.cloneNode(true)
        seckillWrapperItem(newItem, goods)
        // newItem.innerText = `${index + 1}`
        // newItem.style.background = index % 2 == 0 ? "wheat" : "pink"
        slider.append(newItem)
    }
    // console.log(parseInt(getComputedStyle(slider).left))

    //slider arrow
    var arrowLeft = document.getElementById("id_seckill_slider_arrow_left")
    var arrowRight = document.getElementById("id_seckill_slider_arrow_right")
    arrowLeft.onmousedown = () => seckillSlide(true)
    arrowRight.onmousedown = () => seckillSlide(false)
}
function seckillWrapperItem(newItem, goods) {
    newItem
        .getElementsByClassName("seckill_slider_item_img")[0]
        .src = goods.imageUrl
    newItem
        .getElementsByClassName("seckill_slider_item_title")[0]
        .innerText = goods.title
    newItem
        .getElementsByClassName("seckill_slider_item_price_sell")[0]
        .getElementsByTagName("span")[0]
        .innerText = goods.sellPrice
    newItem
        .getElementsByClassName("seckill_slider_item_price_origin")[0]
        .getElementsByTagName("span")[0]
        .innerText = goods.originPrice
}

function seckillSlide(toLeft) {

    var slider = document.getElementById("id_seckill_slider")
    var offset = parseInt(getComputedStyle(slider).left)
    // console.log(`old offset:${offset}`)
    offset += seckillItemWidth * 4 * (toLeft ? -1 : 1)
    // console.log(`new offset:${offset}  toleft:${toLeft} `)
    // console.log("--------")
    slider.style.left = `${offset}px`
    slider.style.transition = "left 500ms ease-in-out 0s"

    var needReset = false
    if (offset == -seckillItemWidth * (seckillItemSize + 4)) {
        needReset = true
        offset = -seckillItemWidth * 4
    } else if (offset == 0) {
        needReset = true
        offset = -seckillItemWidth * seckillItemSize
    }
    if (needReset) {
        setTimeout(() => {
            slider.style.transition = "left 0s ease 0s"
            slider.style.left = `${offset}px`
            // slider.style.transform = `translate3d(${offset}px, 0px, 0px)`
        }, 500)
    }
}


var nicegoodsItemWidth = 200
function initNiceGoodsSlider() {
    var slider = document.getElementById("id_spec_nicgoods_slider")

    var itemsStyle1 = document.getElementsByClassName("spec_nicgoods_slider_link_style1")
    var itemsStyle2 = document.getElementsByClassName("spec_nicgoods_slider_link_style2")
    var itemStyle1 = itemsStyle1[0].cloneNode(true)
    var itemStyle2 = itemsStyle2[0].cloneNode(true)

    for (var i = 0; i < itemsStyle1.length; i++) {
        slider.removeChild(itemsStyle1[i])
    }
    for (var i = 0; i < itemsStyle2.length; i++) {
        slider.removeChild(itemsStyle2[i])
    }
    var goodsSize = nicegoodsList.length
    sliderCount = goodsSize + 8
    for (var i = -4; i < goodsSize + 4; i++) {
        var index = (i + goodsSize) % goodsSize
        var goods = nicegoodsList[index]
        var newItem = (index % 2 == 0 ? itemStyle1 : itemStyle2).cloneNode(true)

        newItem.getElementsByClassName("link_img")[0].src = goods.imageUrl
        newItem.getElementsByClassName("link_title")[0].innerText = goods.title

        slider.append(newItem)
    }
    niceGoodsSlide()

    // setTimeout(()=>niceGoodsSlide(),2000)
}


function niceGoodsSlide() {
    var slider = document.getElementById("id_spec_nicgoods_slider")
    var offset = parseInt(getComputedStyle(slider).left)
    // console.log(`old offset:${offset}`)
    offset += -nicegoodsItemWidth
    // console.log(`new offset:${offset}  `)
    // console.log("--------")
    slider.style.left = `${offset}px`
    slider.style.transition = "left 4000ms linear 0s"
    slider.addEventListener("transitionend", onNiceGoodsTransitionend)
}

function onNiceGoodsTransitionend(e) {
    var slider = document.getElementById("id_spec_nicgoods_slider")
    // console.log(`过渡事件触发--过渡以完成 ${new Date().getTime()}`)
    slider.removeEventListener("transitionend", onNiceGoodsTransitionend)
    var nicegoodsItemSize = nicegoodsList.length + 8
    var offset = parseInt(getComputedStyle(slider).left)
    if (offset == -nicegoodsItemWidth * (nicegoodsItemSize - 5)) {
        offset = -nicegoodsItemWidth * 3
        slider.style.transition = ""
        slider.style.left = `${offset}px`
    }
    niceGoodsSlide()

}

function monitorScroll() {
    // console.log(document.body.scrollHeight);
    var a = document.body.scrollHeight;
    window.addEventListener("scroll", function (event) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // console.log(scrollTop);
        if (scrollTop >= 676 && scrollTop <= 934) {
            updateElevatorItem(0)
        } else if (scrollTop >= 944 && scrollTop <= 1898) {
            updateElevatorItem(1)
        } else if (scrollTop >= 1918 && scrollTop <= 2598) {
            updateElevatorItem(2)

        }

    });
}
function updateElevatorItem(index) {
    var seckill = this.document.getElementById("id_elevator_item_seckill")
    var spec = this.document.getElementById("id_elevator_item_spec")
    var channel = this.document.getElementById("id_elevator_item_channel")
    var items = [seckill, spec, channel];
    for (var i = 0; i < items.length; i++) {
        items[i].style.color = index == i ? "#e1251b" : "#333"
    }
}




