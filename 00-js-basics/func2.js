/**
 * @type {{name: string, age: number}}
 * передача значений по ссылке
 */
const personOne = {
    name: 'Bob',
    age: 21
}

//создание копии объекта
function increasePersonAge(person) {
    const updatedPerson = Object.assign(({}, person))
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)