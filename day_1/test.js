function first() {
    console.log("Inside first")
    second()
    console.log("THE END")
}

function second() {
    console.log("Inside second")
}

first()

//undestanding call stack