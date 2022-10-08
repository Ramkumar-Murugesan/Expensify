
// cannot resolve and reject at same time
// cannot pass more than one object/array/anyvalue as either resolve or reject
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is my resolved data")
        // reject("something went wrong!")
    }, 3500)
})

console.log('before')

// resolve work here
promise.then((data) => {
    console.log('then ', data)
})

// reject work here
promise.then().catch((err) => {
    console.log('err ', err)
})

// way of handling both then and catch
// one way
promise.then((data) => {
    console.log('success ', data)
}).catch((err) => {
    console.log('error ', err)
})

// second way
promise.then((data) => {
    console.log('success 2 ', data)
}, (err) => {
    console.log('error 2 ', err)
})

console.log('after')