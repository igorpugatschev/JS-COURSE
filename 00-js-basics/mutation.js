const person = {
    name: 'Bob',
    age: 25
}
//variant 1
const person2 = Object.assign({}, person)

//variant 2
const person3 = {...person}

//variant 3
const person4 = JSON.parse(JSON.stringify(person))

person2.age = 26
person2.name = 'Alice'
person3.age = 29
person3.name = 'Wiliam'
person4.age = 33
person4.name = 'Wiliy'

console.log(person)
console.log(person2)
console.log(person3)
console.log(person4)