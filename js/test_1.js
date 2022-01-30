
// "use strict"

const person = {
  name: 'Jesse',
  age: 30, 
  address: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person);

function displayMessage({address: { state } }) {
  const message = 'I live in ' + state + '.';
  console.log(message)
}

// console.log(Object.freeze(user));
// console.log(Object.isFrozen(user));
// // user.lastName = 13;
// console.log(user);
// console.log(Object.getOwnPropertyDescriptors(user))

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(descriptor, null, 2));

// let des = Object.getOwnPropertyDescriptor(user, 'age');

// console.log(JSON.stringify(des, null, 2));