const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity)
console.log(myCity.info)
console.log(myCity.info.isPopular)
console.log(myCity.info.country)

delete myCity.info['isPopular']
console.log(myCity)