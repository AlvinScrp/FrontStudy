
class W {
  constructor(el, options) {
    let { data } = options
    let publisher = new Publisher()
    Object.keys(data).forEach((dataKey) => {
      let dataValue = data[dataKey]
      Object.defineProperty(data, dataKey, {
        get() {
          return dataValue;
        },
        set(newValue) {
          console.log("set:" + newValue)
          publisher.onChange(newValue)
          dataValue = newValue
        },
      })
    })

    let elApp = document.getElementById(el)
    const reg = /\{\{(.+?)\}\}/
    if (reg.test(elApp.innerText)) {
      publisher.regist((value) => elApp.innerText = `${value}`)
    }

  }
}
class Publisher {

  constructor() {
    this._notifies = []
  }
  onChange(newValue) {
    for (let notify of this._notifies) {
      notify(newValue)
    }
  }

  regist(notify) {
    this._notifies.push(notify)
  }
}

export { W };