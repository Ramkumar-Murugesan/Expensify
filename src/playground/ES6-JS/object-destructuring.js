
//  spead operator 
// ES6 Object Destructuring
const user = {
    'name': 'ramkumar',
    age: 24,
    location: {
        city: 'chennai',
        degree: 98,
        pincode: 117
    }
}
// older way
// const name = user.name;
// const age = user.age;
// console.log(`name is ${name} and age is ${age}`)

// new way using spread operator
// destructuring field from the object
const {name, age} = user;
console.log(`name is ${name} and age is ${age}`)

// using our custom name (area) and assign default value if the field is undefined or not exist in the object
const {city:area = 'unknowLocation', degree = 2} = user.location
console.log(`city is ${area} and degree is ${degree}`)

// challenge ex2 
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name:publisherName='self-published'} = book.publisher;

console.log(publisherName)
