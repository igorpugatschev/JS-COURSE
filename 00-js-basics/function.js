function sum(a, b) {
    const c = a + b
    console.log(c)
}

let a = 5
let b = 3
sum(a, b)

a = 8
b = 12
sum(a, b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFn(5,7))
