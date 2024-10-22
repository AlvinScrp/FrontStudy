// custom-tab-bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

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
        "iconPath": "/images/tabbar/home.png",
        "selectedIconPath": "/images/tabbar/home-active.png"
      },
      {
        "pagePath": "/pages/category/index",
        "text": "分类",
        "iconPath": "/images/tabbar/category.png",
        "selectedIconPath": "/images/tabbar/category-active.png"
      },
      {
        "pagePath": "/pages/cart/index",
        "text": "购物车",
        "iconPath": "/images/tabbar/cart.png",
        "selectedIconPath": "/images/tabbar/cart-active.png"
      },
      {
        "pagePath": "/pages/mine/index",
        "text": "我的",
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
      if (index != this.data.active) {
        const url = this.data.tabs[index].pagePath
        console.log("active,index,url:", active, index, url);
        console.log(this);
        this.setData({ active: index })
        wx.switchTab({ url: url })

      }
    },
    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      console.log("route:", route);
      const active = this.data.tabs.findIndex(
        (item) =>
          (item.pagePath.startsWith('/') ? item.pagePath.substr(1) : item.pagePath) ===
          `${route}`,
      );
      console.log("active:", active);
      this.setData({ active });
    },

  }
})