const myCity = {
    city: 'New York'
}
console.log(myCity)

//добавление свойств в объект
myCity.popular = true
console.log(myCity)

myCity.country = 'USA'
console.log(myCity)

//удаление свойств объекта
delete myCity.country
console.log(myCity)

//добавление свойств с использованием скобок
myCity['country'] = 'USA'
console.log(myCity)

//добавление свойств с использованием переменной
const regionPropertyName = 'region'
myCity[regionPropertyName] = 'Virginia'
console.log(myCity)