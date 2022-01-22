var { reactive, computed, effect } = require('./reactivity.cjs.js')

let product = reactive({ price: 5, quantity: 2 })
let total = 0
let salePrice = 0


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

// let product = reactive({ price: 5, quantity: 2 })
// let total = ref(0)
// let salePrice = ref(0)


// salePrice = computed(() => product.price * 0.9)
// total = computed(() => salePrice.value * product.quantity)


// console.log(`before update total (should be 9) =  ${total.value} salePrice(should be 4.5) = ${salePrice.value}`)
// product.quantity = 3;
// console.log(`After updated total (should be 13.5) =  ${total.value} salePrice(should be 4.5) = ${salePrice.value}`)
// product.price = 10
// console.log(`After updated total (should be 27) =  ${total.value} salePrice(should be 9) = ${salePrice.value}`)


// product.name = 'Shoes'
// effect(() => {
//     console.log(`Product name is now ${product.name}`);
// })
// product.name = 'Socks'