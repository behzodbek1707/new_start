// const reverseStr = (str) =>{
//     const arr = [...str]
//     const reversedStr = arr.reduce((newStr, curr)=> curr + newStr, "")
//     return reversedStr
// }

// console.log(reverseStr("hello"))

//----------------------------------------------------------------
const reverseStr = (str) =>{
    const clean = str.toLowerCase().trim()
    return clean.split("").reverse().join("")
}

console.log(reverseStr("hello"))