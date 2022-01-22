const targetMap = new WeakMap()
let activeEffect = null
function track(target, key) {
    if (activeEffect) {
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()))
        }
        let dep = depsMap.get(key)
        if (!dep) {
            depsMap.set(key, (dep = new Set()))
        }
        dep.add(activeEffect)
    }
}

function trigger(target, key) {
    let depsMap = targetMap.get(target)
    if (depsMap) {
        let dep = depsMap.get(key)
        if (dep) {
            dep.forEach(effect => effect())
        }
    }
}
function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            let result = Reflect.get(target, key)
            track(target, key)
            return result;
        },
        set(target, key, value, receiver) {
            Reflect.set(target, key, value)
            trigger(target, key)
        }
    }
    return new Proxy(target, handler)
}


function ref(raw) {
    const r = {
        get value() {
            // console.log(`getValue: ${raw}`)
            track(r, 'value')
            return raw
        },
        set value(newVal) {
            // if (newVal !== raw) {
            raw = newVal
            trigger(r, 'value')
            // }

        }
    }
    return r
}


function effect(eff) {
    activeEffect = eff
    activeEffect()
    activeEffect = null
}


function computed(getter) {
    let result = ref(0)
    effect(() => (result.value = getter()))
    return result
}

let product = reactive({ price: 5, quantity: 2 })
let total = ref(0)
let salePrice = ref(0)


salePrice = computed(() => product.price * 0.9)
total = computed(() => salePrice.value * product.quantity)


console.log(`before update total (should be 9) =  ${total.value} salePrice(should be 4.5) = ${salePrice.value}`)
product.quantity = 3;
console.log(`After updated total (should be 13.5) =  ${total.value} salePrice(should be 4.5) = ${salePrice.value}`)
product.price = 10
console.log(`After updated total (should be 27) =  ${total.value} salePrice(should be 9) = ${salePrice.value}`)


product.name = 'Shoes'
effect(() => {
    console.log(`Product name is now ${product.name}`);
})
product.name = 'Socks'