// assume html with <p class="name">Name: </p>
const name = document.querySelector(".name");
console.log(name);

// Method 1: operate directly on the promise returned by fetch.
// Messy because you can't do anything with this later. 
fetch("https://jsonplaceholder.typicode.com/users").then(response => {  // fetch the route and return a promise
  response.json().then(data => {
    console.log(data);
    name.innerText += data[0].name + " (Method 1)" ;
  })
})

// Method 2: return the promise from the first then() and chain another then() to it
// Less messy because we have clear separation of tasks
console.log("1");   //  log the order of execution
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log("2");
    return response.json();
})
  .then(data => {
    console.log("3");
    name.innerHTML += "<br>";
    name.innerText += "Name: " + data[0].name + " (Method 2)";
  });
console.log("4");   // console will log 1 4 2 3


  // Method 3: use async/await to handle the promise
  // Not messy AND everything happens in the expected order of execution.
  async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    name.innerHTML += "<br>";
    name.innerText += "Name: " + data[0].name + " (Method 3)";
  }

  getUser();

/************************************
 * Authoring a Promise
***********************************/

const promise = document.querySelector(".promise");
console.log(promise);

function getSubStatus() {
    return new Promise((resolve, reject) => {
        resolve("nop");
    })
}

function getVideo(subStatus) {
    return new Promise( (resolve, reject) => {
        // switch subStatus with "VIP" and "FREE" else "no video"
        if( "VIP" === subStatus)
            resolve("show video");
        else if( "FREE" === subStatus )
            resolve("show free video");
        else
            reject("no video");
    })
}

// Note: the difference between synchronous and asynchronous functions is thatsynchronous functions return a value, while asynchronous functions return a promise.  So we can use await to get the value from the promise returned by an async function.
async function main() {
    const status = await getSubStatus();
    console.log(status);
    promise.innerHTML += `:  ${status}`;

    try {
        const video = await getVideo(status);
        console.log(video);
        promise.innerHTML += `<br>${video}`;
    } catch (error) {
        console.log(error);
        promise.innerHTML += `<br>${error}`;
    }
}

main();

 
