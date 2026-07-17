/***************************************************
 * Beginner challenges
 * *************************************************/

/**/
function add(a, b) {
  return a + b;
}

document.querySelector('.beginner__01').textContent =
  'The sum of 5 and -3 is: ' + add(5, -3);

function hoursToSeconds(hours) {
  return hours * 3600;
}

document.querySelector('.beginner__02').textContent =
  '1/60th hour is equal to ' + hoursToSeconds(1 / 60) + ' seconds.';

function calcPerimeterRectangle(length, width) {
  return 2 * (length + width);
}

document.querySelector('.beginner__03').textContent =
  'The perimeter of a rectangle with length 20 and width 10 is: ' +
  calcPerimeterRectangle(20, 10) +
  '.';

function calcAreaTriangle(base, height) {
  return 0.5 * base * height;
}

document.querySelector('.beginner__04').textContent =
  'The area of a triangle with base 3 and height 2 is: ' +
  calcAreaTriangle(3, 2) +
  '.';

function appendFrontend(str) {
  return str + ' frontend';
}

document.querySelector('.beginner__05').textContent =
  'Appending "frontend" to "I eat" results in: ' +
  appendFrontend('I eat') +
  '.';

function sumGreaterThan100(x, y) {
  // if you want to add a number and make sure it's a number, you can add a + to it like this:
  return +x + +y > 100;
}

document.querySelector('.beginner__06').textContent =
  'Is 50 and 60 greater than 100? ' + sumGreaterThan100(50, '60');

function lessThanOrEqualToZero(x) {
  return +x <= 0;
}

document.querySelector('.beginner__07').textContent =
  'Is "-10" less than or equal to 0? ' + lessThanOrEqualToZero('-10');

function oppositeBool(bool) {
  return !bool;
}

document.querySelector('.beginner__08').textContent =
  'What is the boolean opposite of false? ' + oppositeBool(0);

function isNotZero(num) {
  return num !== 0;
}

document.querySelector('.beginner__09').textContent =
  'is "poop" not equal to zero? ' + isNotZero('poop');

function calcRemainder(x, y) {
  return +x % +y;
}

document.querySelector('.beginner__10').textContent =
  'What is the remainder of 9/8? ' + calcRemainder(9, '8');

function isOdd(num) {
  return +num % 2 != 0;
}

document.querySelector('.beginner__11').textContent =
  'Is 21 an odd number? ' + isOdd('21');

function isEven(num) {
  return +num % 2 === 0 ? 1 : -1;
}

document.querySelector('.beginner__12').textContent =
  //    'Is 1 an even number? ' + isEven("5");
  'Is 1 an even number? ' + (2 % 2 === 0 ? 1 : -1);

const loggedIn = 'LOGGED_IN';
const loggedOut = 'LOGGED_OUT';
const subscribed = 'SUBSCRIBED';
const unsubscribed = 'UNSUBSCRIBED';

function isLoggedInAndSubscribed(strLoggedIn, strSubscribed) {
  // if(loggedOut === strLoggedIn) return false;
  // else if(unsubscribed === strSubscribed) return false;
  // else return true;
  return loggedIn === strLoggedIn && subscribed === strSubscribed;
}

document.querySelector('.beginner__12').textContent =
  `Is a user ${loggedIn} in and ${subscribed}? ` +
  isLoggedInAndSubscribed(loggedIn, subscribed);

function isLoggedInOrSubscribed(strLoggedIn, strSubscribed) {
  return loggedIn === strLoggedIn || subscribed === strSubscribed;
}

document.querySelector('.beginner__13').textContent =
  `Is a user ${loggedIn} in or ${subscribed}? ` +
  isLoggedInOrSubscribed(loggedIn, unsubscribed);
/**/

///////////////////////////////////////////////
// intermediate problem 1
///////////////////////////////////////////////
/**/ 
function filterOutFalsy(val1, val2) {
  return !val1 ? val1 : val2;
}

document.querySelector('.intermediate__01').textContent =
  `Return the first value if it is falsy. Otherwise, return the second. (true, 'dog') ` +
  filterOutFalsy(true, 'dog');

///////////////////////////////////////////////
// intermediate problem 2
///////////////////////////////////////////////
let myArray = ['one', 'two', 3, 'fifty'];
function arrLength(array) {
  return array.length;
}

document.querySelector('.intermediate__02').textContent =
  `Return the length of the array ${myArray}: ` + arrLength(myArray);

///////////////////////////////////////////////
// intermediate problem 3
///////////////////////////////////////////////
myArray = [0, -5, -10];
function arrSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

document.querySelector('.intermediate__03').textContent =
  `Return the sum of the array ${myArray}: ` + arrSum(myArray);

///////////////////////////////////////////////
// intermediate problem 5
///////////////////////////////////////////////

function progressiveSum(num) {
  let sum = 0;
  for (num; num > 0; num--) {
    sum += num;
  }

  return sum;
}

let num = 5;
document.querySelector('.intermediate__05').textContent =
  `Return the progressive sum of any number ${num}: ` + progressiveSum(num);

///////////////////////////////////////////////
 // intermediate problem 6
 ///////////////////////////////////////////////

function calcTime(sec) {
  let mins = (sec / 60) | 0; // bitwise OR only works with 32 bit ints. or Math.floor(sec / 60)
  let secs = sec % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

num = 500;
document.querySelector('.intermediate__06').textContent =
  `Given a number in seconds, return this number in mm:ss format ${num}: ` +
  calcTime(num);

///////////////////////////////////////////////
 // intermediate problem 7
 ///////////////////////////////////////////////

function getMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

myArray = [-10, -5, -4, -200];
document.querySelector('.intermediate__07').textContent =
  `Given an array of numbers, return the largest number of that array ${myArray}: ` +
  getMax(myArray);

///////////////////////////////////////////////
 // intermediate problem 8
 ///////////////////////////////////////////////

function reverseString(str) {
  let newStr = '';
  const method = 1; //  1 == incrementing loop; 2 == decrementing loop; 3 == array reverse

  if (method === 1) {
    // 1 == incrementing loop
    for (let i = 0; i < str.length; i++) {
      newStr = str[i] + newStr;
    }
  } else if (method === 2) {
    // 2 == decrementing loop
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
  } else {
    // 3 == array reverse
    newStr = str.split('').reverse().join('');
  }
  return newStr;
}

let myStr = 'race car';
document.querySelector('.intermediate__08').textContent =
  `Given a string, return the reversed string "${myStr}":  ` +
  reverseString(myStr);

///////////////////////////////////////////////
 // intermediate problem 9
 ///////////////////////////////////////////////

function convertToZeros(array) {
  let newArr = [];
  const method = 2; //  1 == for loop; 2 == array fill; 3 == array map

  if (method === 1) {
    // 1 == for loop
    for (let i = 0; i < array.length; i++) {
      newArr[i] = 0;
    }
  } else if (method === 2) {
    // 2 == array fill
    newArr = new Array(array.length).fill(0);
  } else {
    // 3 == array map
    newArr = array.map((elem) => {
      return 0;
    });
  }
  return newArr;
}

myArray = [5, '100', 0];
document.querySelector('.intermediate__09').textContent =
  `Given a array of elements, return the same length array filled with 0's. Array: "${myArray}" is converted to:  ` +
  convertToZeros(myArray);

///////////////////////////////////////////////
 // intermediate problem 10
 ///////////////////////////////////////////////

function removeMatches(array, str) {
  let newArray = [];
  const method = 2; //  1 == for loop; 2 == array filter;

  if (method === 1) {
    // 1 == for loop
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== str) {
        newArray.push(array[i]);
      }
    }
  } else if (method === 2) {
    // 2 == array fill
    newArray = array.filter((elem) => elem !== str);
  } else {
    // 3 == array map
  }
  return newArray;
}

myArray = ['Banana', 'Apple', 'Orange', 'Apple', 'Grape'];
let strRemove = 'Apple';
document.querySelector('.intermediate__10').textContent =
  `Given an array of fruits, name the fruit that you want to remove. Remove ${strRemove} from "${myArray}":  ` +
  removeMatches(myArray, strRemove);

///////////////////////////////////////////////
// problem 11
///////////////////////////////////////////////

myArray = ['tomato', 10, 'banana', false];
function filterOutFalsyArray(array) {
  return array.filter((elem) => !!elem); // literally { if (!!elem) return elem; }
}

document.querySelector('.intermediate__11').textContent =
  `Given an array of values, filter out all the falsy values and only return the truthy values. Remove falsy values from "${myArray}":  ` +
  filterOutFalsyArray(myArray);

///////////////////////////////////////////////
// problem 12
 ///////////////////////////////////////////////

function convertToBool(array) {
  return array.map((elem) => !!elem);
}

myArray = ['tomato', undefined, 10, null, 'banana', false];
document.querySelector('.intermediate__12').textContent =
  `Given an array of truthy and falsy values, return the same array of elements into its boolean value. Transform "${myArray}":  ` +
  convertToBool(myArray);

  /**/

/*****************************************************************
 * ADVANCED PROBLEMS
 ****************************************************************/

///////////////////////////////////////////////
// advanced problem 1
///////////////////////////////////////////////
let rating = 4.5;

function showRating(rating) {
  const full = rating | 0; //  Bitwise OR truncates the decimal.
  const isHalf = rating - full != 0;
  let strRating = '';

  for (let i = 0; i < full; i++) {
    strRating += '* ';
  }

  return isHalf ? strRating + '.' : strRating;
}

document.querySelector('.advanced__1').textContent =
  `Given a rating, display a star * for each full and a dot . for each half. Transform "${rating}":  ` +
  showRating(rating);

///////////////////////////////////////////////
// advanced problem 2
///////////////////////////////////////////////

myArray = [20, 40, 10, 30, 50, 10];
function sortLowToHigh(array) {
  return array.sort((a, b) => a - b); //  sort lowest to highest
}

document.querySelector('.advanced__2').textContent =
  `Given an array of numjbers, return the prices sorted by low to high. Transform "${myArray}":  ` +
  sortLowToHigh(myArray);

///////////////////////////////////////////////
// advanced problem 3
///////////////////////////////////////////////

myArray = [
  { id: 1, price: 50 },
  { id: 2, price: 30 },
  { id: 3, price: 60 },
  { id: 4, price: 10 },
];
function sortHighToLow(array) {
  return array.sort((a, b) => b.price - a.price); //  sort highest to lowest
}

function showArray(array) {
  let strArray = '';

  for (let i = 0; i < array.length; i++) {
    strArray += `{ id: ${array[i].id}, price: ${array[i].price}}<br>`;
  }

  return strArray;
}

document.querySelector('.advanced__3').innerHTML =
  `Given an array of objects, return the array sorted by high to low. Transform this<br>${showArray(
    myArray
  )}  <br>TRANSFORMED:<br>` + showArray(sortHighToLow(myArray));

///////////////////////////////////////////////
// advanced problem 6
///////////////////////////////////////////////
function getPostsByUser(userId, data) {
  let result = '';

  ///////////////////////////////////////
  // Method 1: for looop
  for (let i = 0; i < data.length; i++) {
    if (userId === data[i].userId) {
      result += `{ userId: ${data[i].userId}, id: ${data[i].id}, title: ${data[i].title}<br>`;
    }
  }

  ///////////////////////////////////////
  // Method 2: filter
  // result = data.filter(elem => elem.userId === userId);
  // The problem with this in my example is that it returns object which don't render nicely to innerHTML like they do to the console.

  return result;
}

async function postsByUser(userId) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  let str = 'postsByUser() returns ' + getPostsByUser(userId, data); //data.length;
  document.querySelector('.advanced__5').innerHTML = str;
}

postsByUser((userId = 1));

///////////////////////////////////////////////
// advanced problem 5
///////////////////////////////////////////////
function formatIncomplete(data) {
  let result = '';
  let numIncomplete = 5;

  ///////////////////////////////////////
  // Method 1: for looop
  for (let i = 0; i < data.length; i++) {
    if (!data[i].completed) {
      result += `<br>{ userId: ${data[i].userId}, id: ${data[i].id}, completed: ${data[i].completed}`;
      if (!numIncomplete--) break; //  keep subtracting 1 until it reaches 0
    }
  }

  ///////////////////////////////////////
  // Method 2: filter then slice
  //result = data.filter(elem => !elem.completed).slice(0, 6);
  // The problem with this in my example is that it returns object which don't render nicely to innerHTML like they do to the console.

  return result;
}

async function firstSixIncomplete() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  let str = 'firstSixIncomplete() returns ' + formatIncomplete(data); //data.length;
  document.querySelector('.advanced__6').innerHTML = str;
}

firstSixIncomplete();
