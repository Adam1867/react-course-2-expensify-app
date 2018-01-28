//
// OBJECT DESTRUCTURING
//

// const person = {
//   name: 'Adam',
//   age: 28,
//   location: {
//     city: 'Sheffield',
//     temp: 14
//   }
// }

// const { name = 'Anonymous', age } = person

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if ( city && temperature ) {
//   console.log(`It's ${temperature}c in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//
// ARRAY DESTRUCTURING
//

// const address = ['21 Mowbray Street', 'Sheffield', 'South Yorkshire', 'S3 8EL'];

// const[street, city = 'London', county, postcode] = address;
// const[, city, county] = address;

// console.log(`You are in ${city}, ${county}.`);

const coffee = ['Coffee (hot)', '£2.00', '£2.50', '£2.75']
const[type, smPrice, mdPrice, lgPrice] = coffee

console.log(`A medium ${type} costs ${mdPrice}`)