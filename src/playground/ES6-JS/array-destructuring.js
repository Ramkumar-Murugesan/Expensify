

//  spead operator 
// Array Destructuring
const address = ['pg manikkam nagar', 'chennai', '600117'];

// older way
// const areaName = address[0]
// const city = address[1]
// const pin = address[2]

// console.log(`areaName is ${areaName}, city is ${city} and pin is ${pin}`)

// new way of destructuring array
const [areaName, city, pin] = address;
console.log(`new way areaName is ${areaName}, city is ${city} and pin is ${pin}`)
// console.log(`city is ${city}`)

// want only the paritcular position of element 
// for eg u want 3rd position element in array of size 6
// then do comma separator until reach that position in destructuring and kept empty in the remaining

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice=1] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)
