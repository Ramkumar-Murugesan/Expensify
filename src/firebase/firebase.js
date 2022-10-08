// learning code
// firebase are async with the help of promises so we use then for getting resolve data and catch for getting reject data from the promises in firebase
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};



firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// // play with arrays
// // 1. firebase doesn't support array to directly add in get: database.ref().set([{},{}]). if we do then it store in array structured object in our database
// // 2. to avoid that we use push instead of set so it will generate unique id for each object in firebase database eg: below

// // here notes is root level name
// // database.ref('notes').push({
// //     title: 'student',
// //     body: 'go for college'
// // })

// // // update particular object in array
// // database.ref('/notes/-NDB9K1J0xe1yjavV7Bx').update({
// //     title: 'STATE RUNNER'
// // })

// // // remove particular object in array
// // database.ref('/notes/-NDB9K1J0xe1yjavV7Bx').remove()

// //challenge ===> push 3 expenses
// // adding new object in array
// // database.ref('expenses').push({
// //     descripition: 'current bill',
// //     amount: 100,
// //     note: 'this is for current bill',
// //     createdAt: 5600
// // })

// // fetch array data it little different then what we saw in object fetch------ without subscribe
// database.ref('expenses').once('value')
// .then((snapshot) => {
//     let expenses = [];
//     console.log('unstructure array object from database  ', snapshot.val())
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         })
//     })
//     console.log('structured array object ', expenses)
// })

// // chellenge --- fetch with subscribe

// const onValueChangeArray = database.ref('expenses').on('value', (snapshot) => {
//     let expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         })
//     })
//     console.log('structured array object in subscription', expenses)
// }, (error) => {})


// // diff events (subscription) for remove child (child_removed)
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(' child removed')
//     console.log(snapshot.key, snapshot.val());
// })


// // diff events (subscription) for update child (child_changed)
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(' child updated')
//     console.log(snapshot.key, snapshot.val());
// })

// // diff events (subscription) for add child (child_added) ---- it will call new as well as existing value
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('new child added')
//     console.log(snapshot.key, snapshot.val());
// })

// every operation with single objects 
// // set will wipe our entire data from database and set an new value
// database.ref().set({
//     "name": "Ramkumar",
//     age: 29,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'chennai',
//         country: 'India'
//     }
// }).then(data => {
//     console.log('data saved!')
// }).catch(error => {
//     console.log('error saving ', error)
// })

// // update age alone
// // database.ref('age').set(29)

// // update city only
// // database.ref('location/city').set('delhi')

// // adding a new field in existing object
// database.ref('attributes').set({
//     height: 186 + 'cm',
//     weight: `89kg`
// })



// //remove
// // database.ref('isSingle').remove();
// // another way of removing field using set
// // database.ref('isSingle').set(null);

// //remove all data from the database
// // database.ref().remove()

// // update existing data and also add a new field if not exist 
// // update object only update in root level not the nested object of particular field (meaning entire nested object will change with latest value in update)
// // database.ref().update({
// //     name: 'mani',
// //     age: 40,
// //     job: 'software engineer',
// //     location: {
// //         city: 'new york'
// //     }
// // })

// //so in our to update a particular nested object we use below example : important --- update nested object
// // database.ref().update({
// //     job: 'manager',
// //     'location/city': 'UP'
// // })


// // challenge in update
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


// // fetch
// // fetch value once meaning: subscribe is not use here
// database.ref().once('value')
//     .then(snapshot => {
//         const val = snapshot.val()
//         console.log('fetched data  ', val)
//     })
//     .catch(error => {
//         console.log('error fetching data  ', error)
//     })

// // get particular field value
// database.ref('location/city').once('value')
//     .then(snapshot => {
//         const val = snapshot.val()
//         console.log('specific field value fetched data  ', val)
//     })
//     .catch(error => {
//         console.log('error fetching data  ', error)
//     })

// //get value whenever we change the field value meaning subscribe is use here
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log('onValueChange  ', val);
// }, (error) => {
//     console.log('error in subscripition ', error);
// })


// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500)
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000)
// setTimeout(() => {
//     database.ref('age').set(50);
// }, 10500)

// // challenge -- setup data for subscripition ---> msg: andrew is a software developer at amazon.

// const onValueChange2 = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })









//////////////////////////////////////////////////////////////////////////////////////////////////

// direct code from firebase web config
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBe94QwQFzIeSAC9pMJy18N-1uM20xMEYs",
//   authDomain: "expensify-f09a2.firebaseapp.com",
//   databaseURL: "https://expensify-f09a2-default-rtdb.firebaseio.com",
//   projectId: "expensify-f09a2",
//   storageBucket: "expensify-f09a2.appspot.com",
//   messagingSenderId: "387393313586",
//   appId: "1:387393313586:web:abf3503c34f4fa9a80152b",
//   measurementId: "G-NTPZQFW687"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// hosting
// npm install -g firebase-tools

// firebase login
// firebase init
// firebase deploy