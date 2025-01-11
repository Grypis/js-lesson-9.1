//! ==========================================
/* const user = {
  age: 10,
  name: 'Volodka',
  city: 'Dnipro',
};

const zip = JSON.stringify(user);
console.log(zip); */

//! ==========================================
/* const str = `{"update_id": 936365413,"message": {"message_id": 1702107,
   "from": {
    "id": 433982686,
    "is_bot": false,
    "first_name": "Volodymyr",
    "username": "pashchenko_v_r",
    "language_code": "uk"
   },
   "chat": {
    "id": 433982686,
    "first_name": "Volodymyr",
    "username": "pashchenko_v_r",
    "type": "private"
   },
   "date": 1717002831,
   "text": "message"
  }
 }`;

const data = JSON.parse(str);
console.log(data); */

//! ==========================================
//* JSON.stringify(data);

/* const x = [1, 23, 4, 5, 2, 2, undefined, 12, 3, 4];
const data = JSON.stringify(x);
console.log(x, data); */

//! ==========================================
//* JSON.parse(jsonStr)

/* const str = prompt('Enter your json');
const data = JSON.parse(str);
console.log(data); */

//! ==========================================
/* console.log('start');

try {
  console.log(x);
} catch (error) {
  console.log(error);
}

console.log('end'); */

//! ==========================================
/* const str = prompt('Enter your json');

try {
  const data = JSON.parse(str);
  console.log(data);
} catch (err) {
  console.log(err);
} */

//! ==========================================
/* localStorage.setItem('param8', 'hello param 8');
localStorage.setItem('userName', 'Volodka') */

/* const user = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const jsonUser = JSON.stringify(user);
console.log(jsonUser);
localStorage.setItem('user', jsonUser); */

//! ==========================================
/* const data = localStorage.getItem('user');
const user = JSON.parse(data);
console.log(data);
console.log(user); */

//! ==========================================
// localStorage.removeItem('param8');

//! ==========================================
const user1 = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user2 = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user3 = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user4 = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user5 = {
  name: '123123',
  age: '123',
  friend: [12, 12, 3, 1, 2, 4, 1],
};

/* localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user3', JSON.stringify(user3));
localStorage.setItem('user4', JSON.stringify(user4));
localStorage.setItem('user5', JSON.stringify(user5)); */

/* saveToLS('user1', user1);
saveToLS('user2', user2);
saveToLS('user3', user3);
saveToLS('user4', user4);
saveToLS('user5', user5); */

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

//! ==========================================
const data = localStorage.getItem('user1');
try {
  const user = JSON.parse(data);
  console.log(user);
} catch (err) {
  console.log(err);
}

const data1 = loadFromLS('user1');
const data2 = loadFromLS('user2');
const data3 = loadFromLS('user3');
const data4 = loadFromLS('user4');
const data5 = loadFromLS('user5');

console.log(data2);

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
