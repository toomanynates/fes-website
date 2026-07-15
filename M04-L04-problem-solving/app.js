console.log("Hello, world!");

function add(a, b) {
    return a + b;
}

document.querySelector('.beginner__01').textContent = 'The sum of 5 and -3 is: ' + add(5, -3);

function hoursToSeconds(hours) {
    return hours * 3600;
}

document.querySelector('.beginner__02').textContent = '1/60th hour is equal to ' + hoursToSeconds(1/60) + ' seconds.';

function calcPerimeterRectangle(length, width) {
    return 2 * (length + width);
}

document.querySelector('.beginner__03').textContent = 
    'The perimeter of a rectangle with length 20 and width 10 is: ' + calcPerimeterRectangle(20, 10) + '.';

function calcAreaTriangle(base, height) {
    return 0.5 * base * height;
}

document.querySelector('.beginner__04').textContent = 
    'The area of a triangle with base 3 and height 2 is: ' + calcAreaTriangle(3, 2) + '.';

function appendFrontend(str) {
    return str + ' frontend';
}

document.querySelector('.beginner__05').textContent = 
    'Appending "frontend" to "I eat" results in: ' + appendFrontend('I eat') + '.';


function sumGreaterThan100(x, y) {
    // if you want to add a number and make sure it's a number, you can add a + to it like this: 
    return (+x + +y) > 100;
}

document.querySelector('.beginner__06').textContent = 
    'Is 50 and 60 greater than 100? ' + sumGreaterThan100(50, "60");

function lessThanOrEqualToZero(x) {
    return +x <= 0;
}

document.querySelector('.beginner__07').textContent = 
    'Is "-10" less than or equal to 0? ' + lessThanOrEqualToZero("-10");

function oppositeBool(bool) {
    return !bool;
}

document.querySelector('.beginner__08').textContent = 
    'What is the boolean opposite of false? ' + oppositeBool(0);

function isNotZero(num) {
    return num !== 0;
}

document.querySelector('.beginner__09').textContent = 
    'is "poop" not equal to zero? ' + isNotZero("poop");

function calcRemainder(x, y) {
    return +x % +y;
}

document.querySelector('.beginner__10').textContent = 
    'What is the remainder of 9/8? ' + calcRemainder(9, "8");

function isOdd(num) {
    return +num % 2 != 0;
}

document.querySelector('.beginner__11').textContent = 
    'Is 21 an odd number? ' + isOdd("21");

function isEven(num) {
    return +num % 2 === 0 ? 1 : -1;
}

document.querySelector('.beginner__12').textContent = 
//    'Is 1 an even number? ' + isEven("5");
    'Is 1 an even number? ' + (2 % 2 === 0 ? 1 : -1);


const loggedIn = "LOGGED_IN";
const loggedOut = "LOGGED_OUT";
const subscribed = "SUBSCRIBED";
const unsubscribed = "UNSUBSCRIBED"

function isLoggedInAndSubscribed( strLoggedIn, strSubscribed) {
    /* 
    if(loggedOut === strLoggedIn) return false;
    else if(unsubscribed === strSubscribed) return false;
    else return true;
    */
   return loggedIn === strLoggedIn && subscribed === strSubscribed;
}

document.querySelector('.beginner__12').textContent = 
    `Is a user ${loggedIn} in and ${subscribed}? ` + isLoggedInAndSubscribed(loggedIn, subscribed);

function isLoggedInOrSubscribed( strLoggedIn, strSubscribed) {
   return loggedIn === strLoggedIn || subscribed === strSubscribed;
}

document.querySelector('.beginner__13').textContent = 
    `Is a user ${loggedIn} in or ${subscribed}? ` + isLoggedInOrSubscribed(loggedIn, unsubscribed);

