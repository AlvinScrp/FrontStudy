// var arrayMonitor = require("../array/index.js");
var arrayMethods = arrayMethods();

var obj = {
  // name: "ddd",
  // info: { age: 1, height: 2 },
  list: [{ x: 0 }, { x: 1 }, { x: 2 }],
};
var window = {};
observe(obj);

watch(obj, 'list', (newVal, oldVal) => {
  console.log('list onChange ', oldVal, ' --> ', newVal);
});
obj.list.push({ x: 4 });

watch(obj.list[0], 'x', (newVal, oldVal) => {
  console.log('list onChange ', oldVal, ' --> ', newVal);
});
obj.list[0].x = 100;
obj.list = [1, 2, 3];

// watch(obj.list[3], 'x', (newVal, oldVal) => {
//   console.log('list[0].x onChange ', oldVal, ' --> ', newVal);
// });

// obj.list[3].x = 100;
// obj.list[3] = { x: 200 };

// watch(obj, "name", (newVal, oldVal) => {
//   console.log("name onChange ", oldVal, " --> ", newVal);
// });
// watch(obj, 'info.age', (newVal, oldVal) => {
//   console.log('info.age onChange ', oldVal, ' --> ', newVal);
// });
// obj.name = "tttt";
// obj.info.age = 200;
// obj.info = { age: 100 };

function observe(value) {
  if (!isObject(value)) {
    return;
  }
  if (hasOwn(value, '__ob__')) {
    return value.__ob__;
  }
  if (Array.isArray(value)) {
    value.__proto__ = arrayMethods;
    let items = value;
    for (let i = 0; i < items.length; i++) {
      observe(items[i]);
    }
  } else {
    let obj = value;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      defineReactive(obj, key, obj[key]);
    }
  }
  def(value, '__ob__', {}, false);
}

function defineReactive(data, key, val) {
  observe(val);

  let dep = Dep();
  if (Array.isArray(val)) {
    def(val.__ob__, 'dep', dep, false);
  }
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend();
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify();
    },
  });
}
function Dep() {
  let subs = new Set();
  function addSub(sub) {
    subs.add(sub);
  }

  function depend() {
    if (window.target) {
      console.log('depend', window.target);
      addSub(window.target);
    }
  }
  function notify() {
    console.log('notify');
    subs.forEach((sub) => sub.update());
  }
  return { depend, notify };
}
function watch(vm, expOrFn, cb) {
  // let vm = vmParams;
  // let cb = cbParams;
  let getter = parsePath(expOrFn);
  let value = get();

  function get() {
    window.target = { update };
    console.log('get');

    let value = getter(vm);
    window.target = undefined;
    return value;
  }
  function update() {
    const oldValue = value;
    value = getter(vm);
    // console.log('update', oldValue, '-->', value);
    cb(value, oldValue);
  }

  /**
   * 解析简单路径
   */
  function parsePath(path) {
    const bailRE = /[^\w.$]/;
    if (bailRE.test(path)) {
      return;
    }
    const segments = path.split('.');
    return function getObjProperty(obj) {
      for (let i = 0; i < segments.length; i++) {
        if (!obj) return;
        obj = obj[segments[i]];
      }
      return obj;
    };
  }
}

function arrayMethods() {
  const arrayProto = Array.prototype;
  const arrayMethods = Object.create(arrayProto);
  const methodNames = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  methodNames.forEach(function (method) {
    // 缓存原始方法
    const original = arrayProto[method];
    Object.defineProperty(arrayMethods, method, {
      value: function mutator(...args) {
        const result = original.apply(this, args);
        const ob = this.__ob__;
        let inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break;
          case 'splice':
            inserted = args.slice(2);
            break;
        }
        if (inserted) {
          let items = inserted;
          for (let i = 0; i < items.length; i++) {
            observe(items[i]);
          }
        }
        ob.dep.notify();
        return result;
      },
      enumerable: false,
      writable: true,
      configurable: true,
    });
  });
  return arrayMethods;
}

function isObject(value) {
  return value instanceof Object;
}
function hasOwn(obj, key) {
  return obj.hasOwnProperty(key);
}
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: enumerable,
    writable: true,
    configurable: true,
  });
}
// export { defineReactive };
