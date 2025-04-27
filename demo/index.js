class UserCard extends HTMLElement {
  static observedAttributes = ["size","color"];
  constructor() {
    super();
    // 创建影子DOM
    const shadow = this.attachShadow({ mode: 'open' });
    
    // 获取模板
    const template = document.getElementById('userCardTemplate');
    const content = template.content.cloneNode(true);
    
    // 添加事件监听器
    const button = content.querySelector('button');
    button.addEventListener('click', () => {
      console.log('onclick',this)
      this.updateHostStyles( 'red');
    });
    
    // 将内容添加到影子DOM
    shadow.appendChild(content);
  }

  // 更新影子DOM中:host的样式
  updateHostStyles( value) {
    // 获取影子DOM中的样式表
    const styleSheet = this.shadowRoot.styleSheets[0];
    
    console.log('styleSheet.cssRules',styleSheet.cssRules)
    // 遍历所有规则，找到:host规则
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      const rule = styleSheet.cssRules[i];
      if (rule.selectorText === ':host') {
        // 修改CSS变量的值
        rule.style.setProperty('--background-color', value);
        break;
      }
    }
  }

  // 辅助方法：调整颜色亮度
  adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  connectedCallback() {
    console.log("自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已变更。${oldValue} ${newValue}`);
  }
}

// 注册自定义元素
customElements.define('user-card', UserCard);
