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

//delete myCity.info['isPopular']
delete myCity.info.isPopular
console.log(myCity)

const name = 'Bogdan'
const postsQty = 23
/**
const userProfile = {
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}
*/
const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)