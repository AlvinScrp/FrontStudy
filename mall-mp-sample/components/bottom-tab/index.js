// components/tabbar/tab-bar.js
const pageKeys = ['home', 'category', 'cart', 'mine']
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    pageKey: {
      type: String,
      observer: function (newValue) {
        var index = pageKeys.indexOf(newValue)
        index = index < 0 ? 0 : index
        this.setData({ active: index })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    tabs: [
      {
        "pagePath": "/pages/home/index",
        "text": "首页",
        "key": "home",
        "iconPath": "/images/tabbar/home.png",
        "selectedIconPath": "/images/tabbar/home-active.png"
      },
      {
        "pagePath": "/pages/category/index",
        "text": "分类",
        "key": "category",
        "iconPath": "/images/tabbar/category.png",
        "selectedIconPath": "/images/tabbar/category-active.png"
      },
      {
        "pagePath": "/pages/cart/index",
        "text": "购物车",
        "key": "cart",
        "iconPath": "/images/tabbar/cart.png",
        "selectedIconPath": "/images/tabbar/cart-active.png"
      },
      {
        "pagePath": "/pages/mine/index",
        "text": "我的",
        "key": "mine",
        "iconPath": "/images/tabbar/mine.png",
        "selectedIconPath": "/images/tabbar/mine-active.png"
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabClick(e) {
      const index = e.currentTarget.dataset.index
      const active = this.data.active
      if (index != active) {
        const url = this.data.tabs[index].pagePath
        console.log("active,index,url:", active, index, url);
        wx.switchTab({ url: url })

      }
    },
    // init() {
    //   const page = getCurrentPages().pop();
    //   const route = page ? page.route.split('?')[0] : '';
    //   console.log("route:", route);
    //   const active = this.data.tabs.findIndex(
    //     (item) =>
    //       (item.pagePath.startsWith('/') ? item.pagePath.substr(1) : item.pagePath) ===
    //       `${route}`,
    //   );
    //   console.log("active:", active);
    //   this.setData({ active });
    // },

  }
})