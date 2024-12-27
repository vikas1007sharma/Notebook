//% DEFAULT JAVASCRIPT
// 1. Synchronous
// 2. Single-Threaded
// execution context: one line at a time


//' blocking code: Blocks the flow of the program until the task is complete. (read file sync)
//' non blocking code: Does not block execution; other tasks can run while the operation completes. (read file async)


//' Primitive Datatype: String, Number, BigInt, Boolean, Undefined, Null, Symbol
//' Non-Primitive Datatype: Array, Object, Function


//$ Type
console.log(typeof null)          //# object
console.log(typeof undefined)     //# undefined
console.log(typeof NaN)           //# number
console.log(typeof array)           //' object
console.log(typeof obj)             //' Object
console.log(typeof fn)              //' function
let city;                                    //! undefined


//$    NULL and UNDEFINED
//# null: standalone value (null is intentionally used to represent "no value.")
//# undefined: value is not assigned (typically the default value for uninitialized variables or missing properties.)



//$ Object
{
    const mySymbol = Symbol("1")     //# Symbol
    let obj = {                      //# Object
        key: "value",
        [mySymbol]: "mysy"           //' symbol is used in []
    }
    console.log(typeof obj["key"])      //' string 
    console.log(typeof obj[mySymbol])   //' string
    console.log(obj[mySymbol]);         //' Correct way to access a symbol property
    console.log(obj.mySymbol);          //% Undefined or error, depending on context
    console.log(Object.keys(obj))       //' get all keys
    console.log(Object.values(obj))     //' get all values
}




//$   STACK vs HEAP allocation
{
    let a = 10
    let b = a
    b = 20
    //' a = 10, b = 20    STACK (copy)
    //# a and b are primitive values, so when b is assigned a's value, a copy is made. Modifying b doesn’t affect a, so a remains 10 while b becomes 20.

    let user = {
        email: "a@e"
    }
    let newUser = user
    newUser.email = "a@f"
    //' user: "a@f", newUser: "a@f"    HEAP (reference)
    //# user is a reference to an object stored in the heap. When newUser is assigned user, it points to the same object in the heap. Modifying newUser.email also changes user.email since both refer to the same object.
}



//$   TRIM, REPLACE
{
    let str = "      foo %20% bar     "
    console.log(str.trim())                     //'     "foo %20% bar"
    console.log(str.replace("%20%", "-"))       //'     "      foo - bar     "f
}



//$   DATE
{
    let myDate = new Date()
    const formattedDate = myDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    console.log(formattedDate)       //' 13/11/2024
    console.log(typeof myDate)       //' object
}



//$   ARRAY
{
    let arr = [0, 1, 2, 3, 4, 5];
    arr.push(6);                        //' Adds 6 at the end
    arr.pop();                          //' Removes the last element (6)
    console.log(arr.slice(1, 3));       //' [1, 2] -> Slice returns a new array.
    console.log(arr.splice(1, 3));      //' [1, 2, 3] -> Splice removes and returns elements from original array.
    console.log(arr);                   //' [0, 4, 5] -> Remaining elements after splice
    let even = [0, 2, 4];
    let odd = [1, 3, 5];
    let all = [...even, ...odd];        //' Combining even and odd arrays into a new one.
    console.log(all);                   //' [0, 2, 4, 1, 3, 5]
    array.flat(depth);
    const arr1 = [1, [2, [3, [4]]]];
    console.log(arr1.flat(2));
}



//$  FUNCTION
{
    function calculate(a, b, ...c) { return c }
    console.log(calculate(1, 2, 3, 4, 5))

    // 'Function Expressions: These are not hoisted in the same way. The sub function is assigned to a variable using a function expression, and JavaScript doesn't assign the function to sub until after the line const sub = function(a, b) {} is executed.
    console.log(sub(4, 1))        // error
    const sub = function (a, b) {
        return a - b
    }

}

//$ True/False
{
    //# FALSE: 0, -0, "", null, undefined, NaN, 0n
    //# TRUE: [], {}, "0", "false", " ", funcion(){}

    // (==) compares values after type coercion
    console.log(false == 0);  // true
    console.log(false == ''); // true
    console.log(true == '');  // false
    console.log(0 == '');     // true
    console.log([] == 0);     // true  (empty array is coerced to an empty string, which is coerced to 0)

    // === checks both the value and the type of the operands.
    console.log(false === 0);  // false

    //' arr.length == 0
    //' Object.keys(obj).length === 0
}


//$ For of, for in, for each
{
    const mp = new Map()
    mp.set("1", "hello")
    mp.set("2", "world")
    // for...of: Used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).
    for (const [key, val] of mp) {    // for of
        console.log(key, val)
    }
    // for...in: Used to iterate over enumerable properties of an object (including inherited properties).
    const obj = { a: 1, b: 2, c: 3 };
    for (const key in obj) {
        console.log(key);  // Outputs: a, b, c
        console.log(obj[key]);  // Outputs: 1, 2, 3
    }
    // forEach(): Used to iterate over arrays or array-like objects.
    arr.forEach((item, index) => { })
}


//$ setInterval, setTimeout, clearInterval
{
    const time = setInterval(() => {
        console.log(new Date().toLocaleTimeString()); // Logs the current time every second
    }, 1000);

    setTimeout(() => {
        console.log('Stopped timer at 5th sec');
        clearInterval(time); // Clears the interval after 5 seconds
    }, 5000);
}



//$ EVENTS
// An event in JavaScript refers to an occurrence or action that is triggered by the browser or the user, such as a mouse click, key press, form submission, page load, etc
{
    // Event Listener with basic click event
    document.getElementById('owl-image').addEventListener('click', () => {
        alert("Owl is clicked");
    });

    // Event Listener with Capturing Phase (third parameter is true)
    document.getElementById('owl-image').addEventListener('click', () => {
        alert("Owl is clicked in capturing phase");
    }, true);

    // Event Listener with stopPropagation to stop event bubbling
    document.getElementById('owl-image').addEventListener('click', (e) => {
        alert("Owl is clicked and propagation is stopped");
        e.stopPropagation(); // Prevents the event from bubbling
    });

    // Event Listener for form submission with preventDefault
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the form from submitting
        alert("Form submitted");
    });
}



//$ PROMISES
fetch('https://google.com').then().catch().finally()
const promise = new Promise((resolve, reject) => {
    const user = { username: "Vikas", age: 30 };
    resolve(user); // Resolve the promise with the user object
    // reject("Failed to fetch user data.");
});

promise
    .then((user) => {
        console.log("User data received:", user); // Log the entire user object
        return user.username; // Return the username for the next .then()
    })
    .then((username) => {
        console.log("Username:", username); // Log the username
    })
    .catch((error) => {
        console.error("Error:", error); // Log any error that occurs
    })
    .finally(() => {
        console.log("Execution completed."); // This runs regardless of the outcome
    });
// If you do not include the .catch() and .finally() methods 
// With Successful Resolution: The promise chain will work as expected, and you'll see the results from the .then() methods.
// With Rejection: Without a .catch() to handle the error, you'll see an "Unhandled Promise Rejection" warning, and the code in the subsequent .then() blocks will not execute.



//$ API
//# then catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data); // Log the data
    })
    .catch((err) => {
        console.log(err); // Log any errors
    });

//# async await
const fetchuser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}
fetchuser()



//$ Closure
function clickHandler(color) {
    return function () {
        document.body.style.backgroundColor = color; // Set background color
    };
}
// Attach click events to elements with specific IDs
document.getElementById('orange').onclick = clickHandler("orange");
document.getElementById('green').onclick = clickHandler("green");



//' JavaScript Comma Operator mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand.
{
    function func1() { return 2; }
    function func2() { return 4; }

    let a = (func1(), func2());
    console.log(a);   // 4  
}
{
    function anyName() {
        c = 2;      // No identifier, so it becomes a global variable
    }
    function fun() {
        console.log(c);
    }
    anyName();
    fun()


    "use strict"; // in strict mode we have to give var let or const name
    function anyName() {
        c = 1; // Error: 'c' is not declared
    }
    anyName(); // Throws ReferenceError for 'c'
}
{
    let name = "Vikas"
    console.log(Number(name))                //# NaN
    console.log(typeof NaN)                  //# number
    console.log(typeof Number(name))         //# number
}
{
    isNaN(false);        // false, false converts to 0
    isNaN(undefined);    // true

    console.log("1" + 2 + 2)          // 122
    console.log(1 + 2 + "2")          // 32
}


// Code 1: Basic use of setTimeout with 'var'
function x() {
    var i = 1; // Variable 'i' is declared and initialized
    setTimeout(function () {
        console.log(i); // Logs 1 after 3 seconds because 'i' is accessible in the closure
        console.log("Hello JavaScript"); // Logs "Hello JavaScript" after 3 seconds
    }, 3000); // Executes the callback after 3 seconds
}

x(); // Output after 3 seconds: 1, Hello JavaScript

// Code 2: Using 'var' inside a loop with setTimeout
function X() {
    for (var i = 1; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs 5, 5, 5, 5 because 'var' is function-scoped, 
            // and the loop updates the same 'i' variable for all iterations
        }, 1000); // Executes the callback after 1 second
    }
    console.log("Hello JavaScript"); // Logs immediately as it is outside the setTimeout
}

X(); // Output:
// Hello JavaScript (immediate)
// (After 1 second) 5, 5, 5, 5

// Code 3: Using 'let' inside a loop with setTimeout
function X_Let() {
    for (let i = 1; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs 1, 2, 3, 4 because 'let' creates a new block-scoped variable for each iteration
        }, 1000); // Executes the callback after 1 second
    }
    console.log("Hello JavaScript"); // Logs immediately as it is outside the setTimeout
}

X_Let(); // Output:
// Hello JavaScript (immediate)
// (After 1 second) 1, 2, 3, 4

// Code 4: Using a closure to fix 'var' scoping inside the loop
function x() {
    for (var i = 1; i < 5; i++) {
        function close(x) {
            // 'close' creates a new scope that stores the current value of 'i' as 'x'
            setTimeout(function () {
                console.log(x); // Logs 1, 2, 3, 4 because each 'x' is a unique copy of 'i'
            }, x * 1000); // Delay increases with 'x' (e.g., 1 second for 1, 2 seconds for 2, etc.)
        }
        close(i); // Passes the current value of 'i' to the closure
    }
    console.log("JavaScript"); // Logs immediately as it is outside the setTimeout
}

x(); // Output:
// JavaScript (immediate)
// (After 1 second) 1
// (After 2 seconds) 2
// (After 3 seconds) 3
// (After 4 seconds) 4


//$ DOM
{
    // Modify inner HTML
    document.getElementById("firstHeading").innerHTML = "myName";

    // Access elements by class and ID
    document.getElementsByClassName("heading");
    document.getElementById("title");

    // Query selectors
    document.querySelector("#title");
    document.querySelector(".heading");
    document.querySelectorAll("h1").forEach(h => h.style.backgroundColor = 'green');

    // Event listener
    document.querySelector('form').addEventListener('submit', e => e.preventDefault());

    // Create and append new div element
    const div = document.createElement('div');
    div.className = "main";
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "generated title");
    div.style.backgroundColor = "green";
    div.style.padding = "12px";
    div.appendChild(document.createTextNode("Chai aur code"));
    document.body.appendChild(div);
}