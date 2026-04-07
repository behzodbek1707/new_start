// console.log(typeof null)
//-------------------------------
// console.log(1 + "2" + 3)
//-------------------------------
//map
// const arr = [1, 2, 3]
// const result = arr.map(x => x * 2)
// console.log(result)
//---------------------------------
//filter
// const arr = [1, 2, 3, 4, 5]
// const result = arr.filter(x => x % 2 === 0)
// console.log(result)
//------------------------------------
//reduce
// const arr = [1, 2, 3, 4]
// const result = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(result)
//---------------------------------------------------
// console.log([] == false)
//-------------------------------------------------------
// console.log("start")

// setTimeout(() => {
//     console.log("timeout")
// }, 0)

// console.log("end")
//--------------------------------------------------------
// console.log("start")

// Promise.resolve().then(() => {
//     console.log("promise")
// })

// console.log("end")
//--------------------------------------------------------
// console.log("start")

// setTimeout(() => {
//     console.log("timeout")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("promise")
// })

// console.log("end")
//------------------------------------------------------
// async function test() {
//     console.log("   ")
//     await Promise.resolve()
//     console.log("B")
// }

// test()
// console.log("C")
//------------------------------------------------------
// async function test() {
//     return "Hello"
// }

// console.log(test())
//----------------------------------------------------
// async function test() {
//     return "Hello"
// }

// test().then(res => console.log(res))

// console.log("End")
//------------------------------------------------------
// console.log("start")

// async function test() {
//     console.log("A")
//     await null
//     console.log("B")
// }

// test()

// console.log("end")
//------------------------------------------------------
console.log("start")

setTimeout(() => console.log("timeout"), 0)

Promise.resolve().then(() => {
    console.log("promise1")
}).then(() => {
    console.log("promise2")
})

console.log("end")