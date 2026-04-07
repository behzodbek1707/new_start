// const palindrome = (str) =>{
//     const arr = [...str]
//     const reverseStr = arr.reduce((newStr, curr)=> curr + newStr, "")
//     return reverseStr === str
// }

// console.log(palindrome("hello"))
// console.log(palindrome("madam"))

//-----------------------------------------------------------
const palindrome = (str) => {
    const clean = str.toLowerCase().trim()
    return clean === clean.split('').reverse().join('')
}

console.log(palindrome("hello"))
console.log(palindrome("madam"))