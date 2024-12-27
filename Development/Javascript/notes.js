//# JavaScript is a high-level, versatile programming language primarily used to make web pages interactive. It runs in browsers and allows developers to create dynamic content, control multimedia, animate elements, and handle user interactions. Beyond the browser, it’s used for server-side development (Node.js), mobile apps, and more.



//% Explain passed by value and passed by reference.
//` In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//% Explain Higher Order Functions in javascript.
//` Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//% this
//` this keyword in JavaScript refers to the current object that the function


//%  VAR, LET and CONST
//# var: Can be redeclared and reassigned, functional scope
//# let: Can be reassigned but not redeclared in the same scope, block scope.
//# const: Cannot be reassigned or redeclared; must be initialized at the time of declaration.

//# var has (Function Scope): Ignores block boundaries and is accessible throughout the function.
//# let & const has (Block Scope): Respect block boundaries, limiting their access within {} blocks.

//' var variables are hoisted and initialized with undefined, so they can be accessed before their declaration, though their value will be undefined until assigned.
//' let and const variables are also hoisted, but they are not initialized. Accessing them before their declaration causes a ReferenceError because they remain in a "temporal dead zone" until the code reaches the variable declaration line.



//% What is the difference between Event Capturing and Event Bubbling?
//' This process starts with capturing the event of the outermost element and then propagating it to the innermost element.
//' This process starts with capturing the event of the innermost element and then propagating it to the outermost element.



//% What is a Temporal Dead Zone?
//' Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:
{
    x = 23; // Gives reference error
    let x;

    function anotherRandomFunc() {
        message = "Hello"; // Throws a reference error

        let message;
    }
    anotherRandomFunc();
}
//' Although hoisting does occur (the declaration of let x is moved to the top), the initialization of the variable doesn't happen until the code reaches the let x; line.



//% What is reference error, syntax error and type error?
//' A Reference Error occurs when JavaScript tries to access a variable that has not been declared or is out of scope.
// console.log(x);  // ReferenceError: x is not defined
//' A Syntax Error occurs when there is an issue with the syntax or structure of the code, making it invalid or unrecognizable by the JavaScript engine.
// if (true {  
//   console.log("Hello");
// }
//' A Type Error happens when a value is not of the expected type, such as trying to perform an operation on a value that doesn't support it.
// let num = 5;
// num.toUpperCase();  // TypeError: num.toUpperCase is not a function



//% Higher Order Functions in javascript.
//' Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.


//% What is DOM?
//' DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects. When a browser loads an HTML document, it creates a DOM tree. This tree structure allows JavaScript to interact with and manipulate the HTML document.


//% What is virtual DOM?
//' The Virtual DOM, on the other hand, is an abstraction of the actual DOM used to optimize rendering, especially in libraries like React. It is a lightweight copy of the actual DOM, where changes are made before updating the real DOM. When the virtual DOM is updated, a diffing algorithm compares the new virtual DOM with the previous version and calculates the minimal changes needed. This allows only necessary updates to be made to the real DOM, which reduces performance overhead and ensures that the UI remains responsive. The virtual DOM helps in reducing unnecessary re-renders and provides a more efficient way of updating the interface.


//% Event Bubbling 
//' Event Bubbling is the process where an event starts from the target element and then propagates (bubbles) up to the root of the DOM tree. This is the default behavior for most events.


//% Event Capturing:
//' Event Capturing is the process where an event starts from the root of the DOM and travels down to the target element. Unlike event bubbling, where the event bubbles up, capturing happens before the event reaches the target.



//% difference betweem .map() .forEach() .reduce() .filter()
//' Here’s the difference explained with examples:
//# 0. for(): A loop for iterating over arrays or ranges. Gives full control over the iteration process. It has Break keyword
//# 1. .map(): Creates a new array by transforming each element. Returns a new array.
//# 2. .forEach(): Iterates through each element to perform an action. Does not return a new array.
//# 3. .filter(): Creates a new array with elements that pass a condition. Returns a filtered array.
//# 4. .reduce(): Reduces the array to a single value by applying a function. Returns a single value.
{
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);
    numbers.forEach(num => console.log(num * 2));
    const even = numbers.filter(num => num % 2 === 0);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
}



//% Explain Hoisting in javascript.
//' In JavaScript, hoisting is the behavior where declarations of variables and functions are moved to the top of their scope (global or local) before execution. This means variables and functions can be used before they’re defined.
{
    console.log(hoistedVar); // undefined due to hoisting
    var hoistedVar = 5;

    hoistedFunc(); // Outputs "Hello!"
    function hoistedFunc() {
        console.log("Hello!");
    }
}
//! Note: Only declarations are hoisted, not initializations.
//! To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:



//% Explain Implicit Type Coercion in javascript.
//' Implicit Type Coercion in JavaScript is the automatic conversion of values from one data type to another when different types are used in expressions.
{
    // String Coercion: Occurs with the + operator; numbers are converted to strings.
    var x = 3, y = "3";
    x + y; // "33"

    // Boolean Coercion: Converts values to boolean when used in conditions. Falsy values include false, 0, "", null, undefined, and NaN.
    var x = 0, y = 23;
    if (x) { /* won't run */ }
    if (y) { console.log(y); } // 23

    // Equality Coercion: The == operator converts types before comparison, while === does not.
    var a = 12, b = "12";
    a == b;  // true
    a === b; // false
}



//% Is javascript a statically typed or a dynamically typed language?
//' JavaScript is a dynamically typed language, meaning variable types are checked at run-time rather than compile-time. This allows JavaScript variables to hold any data type and change types as needed.
{
    let Name = "ram"; // Initially a string
    Name = 5;         // Now a number, no error in JavaScript
}



//% What is an Immediately Invoked Function in JavaScrip
//' An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. It is used to create a local scope and avoid polluting the global namespace.
{
    (() => {
        var c = 13; 
    })();  // semicolon to safely terminate the IIFE
    console.log(c);   // ReferenceError: c is not defined
}



//% Explain call(), apply() and, bind() methods.
//' call(): It immediately invokes the function with a specified 'this' value. Additional arguments are passed individually. For example, you can use call() to borrow methods from one object to use with another.

//' apply(): Like call(), it also immediately invokes the function with a specified this value. The key difference is that it takes arguments as an array or an array-like object, making it useful when you already have arguments in such a format.

//' bind(): It does not execute the function immediately. Instead, it creates and returns a new function with this permanently bound to the specified value. This is useful for creating functions with fixed contexts to be used later. (works similar to call)

let userDetails = {
    name: "Ajay Suneja",
    Age: 28,
    Designation: "Software Engineer"
};
const printDetails = function (state) {
    console.log(this.name + " " + state);
}
printDetails.call(userDetails, "Delhi", "India");
printDetails.apply(userDetails, ["Delhi", "India"]);
let newFun = printDetails.bind(userDetails, "Delhi", "India");
newFun();



//% Debouncing 
//' Debouncing is a technique used to limit the number of times a function is called by ensuring that the function is only executed after a certain period of inactivity.
{
    let debounceTimer;
    function searchQuery(query) {
        clearTimeout(debounceTimer); // Clears the previous timer
        debounceTimer = setTimeout(() => {
            console.log("Searching for:", query); // Executes after 300ms of inactivity
        }, 300);
    }

    searchQuery("apple");
    searchQuery("banana");  // Only "banana" will be logged after 300ms
}



//% Throttling
//'Throttling ensures that a function is executed at most once in a specified time interval, no matter how many times it is called.
{
    function logScroll() {
        console.log("Scroll event triggered");
    }

    let throttleTimer;
    window.addEventListener("scroll", function () {
        if (!throttleTimer) {
            throttleTimer = setTimeout(() => {
                logScroll();
                throttleTimer = null;  // Reset throttle
            }, 500);  // Executes at most once every 500ms
        }
    });
}


//% What is currying in JavaScript?
//' Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
{
    function add(a) {
        return function (b) {
            return a + b;
        }
    }
    // Method 1
    add(3)(4)
    // Method 2: Storing intermediate results
    const step1 = add(3); // data is taken from another source
    const step2 = step1(4); // data is taken from another source
}
//# For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).

//% Infinite curring
function add(a) {
    return function (b) {
        if (b) {
            return add(a + b);
        }
        return a;
    }
}
console.log(add(4)(5)(7)(9)());



//% Explain Scope and Scope Chain in javascript.
//' Global Scope: Variables defined outside any function are globally accessible.
//' Function Scope: Variables defined within a function are only accessible inside that function.
//' Block Scope: let and const variables are block-scoped, meaning they are accessible only within the {} block they are defined in.

//' Scope Chain: When a variable is not found in the current scope, JavaScript looks outward through nested scopes until it reaches the global scope. If the variable is not found, a reference error is thrown.



//% What is lexical scoping
//' Lexical scoping means that the scope of a variable is determined by where it is defined in the code, and inner functions have access to variables from their outer (enclosing) scopes.
// JavaScript follows lexical scoping, meaning that functions are executed using the variable scope in which they were defined, not where they are called.
{
    function outer() {
        let outerVar = "I am outside!";
        function inner() {
            console.log(outerVar);  // inner function has access to outerVar
        }

        inner();
    }
    outer();  // Outputs "I am outside!"
}



//% Explain Closures in JavaScript.
//' A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). 
//' A closure in JavaScript is a function that has access to its outer function's variables and parameters, even after the outer function has finished executing.
{
    function main() {
        const name = "Piyush Garg";
        function sayMyName() {
            console.log(name);      // Has access to name even when the main function is executed
        }
        return sayMyName;
    }
    let fn = main(); // Returns a function
    fn(); // Invokes sayMyName, outputs "Piyush Garg"
    fn(); // Invokes sayMyName again, outputs "Piyush Garg"
}
{
    var sum = function (a) {
        console.log("Live Viewers " + a);
        var c = 4;
        return function (b) {
            return a + b + c;
        }
    };

    var store = sum(2); // Call 'sum' with 2, and store the returned function in 'store'
    console.log(store(5)); // Call the returned function with 5, and log the result
}
// Uses of Closures.
// Currying: Creates functions with pre-applied arguments.
// Memoization: Caches results of expensive function calls.



//% What is prototype in javascript?
//' A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, which acts as a blueprint, allowing objects to share functionalities.
//' JavaScript first checks the object for a property; if not found, it searches up the prototype chain until it reaches null.
{
    const p1 = {
        fname: "Piyush",
        lname: "Garg",
        getFullname() {
            return `${this.fname} ${this.lname}`;
        }
    };
    const p2 = Object.create(p1);
    console.log("p2 is", p2.fname); // Output should be "Piyush"
    p2.__proto__.fname = "Hack";
    console.log("p1 after hack", p1.fname); // Output will now be "Hack"
}
{
    const p1 = {
        xp1: "I am inside P1"
    };
    const p2 = {
        xp2: "I am inside P2",
        __proto__: p1
    };
    const p3 = {
        xp3: "I am inside P3",
        __proto__: p2
    };
    console.log(p3.xp3); // "I am inside P3"
    console.log(p3.xp2); // "I am inside P2" (inherited from p2)
    console.log(p3.xp1); // "I am inside P1" (inherited from p1)
}



//%  Difference between prototypal and classical inheritance
//' Classical inheritance involves classes inheriting properties and methods from other classes, with objects being instances of those classes. 
//' A subclass can be created using the extends keyword to inherit from a superclass.

//' Prototypal inheritance, on the other hand, allows objects to inherit directly from other objects through a prototype chain, enabling objects to be cloned and extended without the need for classes.
//' Instances are created using constructor functions or Object.create() to clone objects.
{
    // Constructor function to create a Person object
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        };
    }
    // Create instances using the new keyword
    const person1 = new Person("Alice", 30);
    const person2 = new Person("Bob", 25);
}
{
    // Creating an object with Object.create() and using an existing object as the prototype
    const animal = {
        speak: function () {
            console.log("Animal makes a sound");
        }
    };
    // Creating a new object 'dog' that inherits from 'animal'
    const dog = Object.create(animal);
    dog.bark = function () {
        console.log("Woof! Woof!");
    };
    dog.speak(); // Inherited method from animal: "Animal makes a sound"
    dog.bark();  // Own method of dog: "Woof! Woof!"
}



//% Autoboxing
//' When you access methods or properties on primitive values, JavaScript automatically wraps them in their respective wrapper objects (like String, Number, Boolean), allowing you to use object-like behavior.
let fname = "Piyush"
// fname.
//' when you do fname. you get access to properties like .length, .toUpperCase(), etc.,



//% What are arrow functions?
//' Arrow functions, introduced in ES6, provide a shorter syntax for declaring functions and are used only as function expressions. They do not require the function keyword, and if there's a single return expression, the return keyword and curly braces can be omitted.

//` 1. Syntax: 
const fn = () => { }

//` 2. Hoisting: Regular function - hoisted, Arrow function - not hoisted
{
    sayHello(); // Outputs "Hello"
    function sayHello() { console.log("Hello"); }

    greet(); // Error: greet is not defined
    var greet = () => console.log("Hello");
}
//` 3. this keyword
{
    // Regular function using 'this' keyword
    const obj1 = {
        value: 20,
        myFunction: function () {
            console.log("Value is " + this.value);
        },
    };
    // Arrow function using 'this' keyword
    const obj2 = {
        value: 20,
        myFunction: () => {
            console.log("Value is " + this.value); //! 'this' refers to the global object (window in browsers)
        },
    };
    // Calling the functions
    obj1.myFunction(); // Outputs: Value is 20
    obj2.myFunction(); // Outputs: Value is undefined (or window.value if in a browser)
}




//% What is the rest parameter and spread operator?
//' The rest parameter allows a function to accept an indefinite number of arguments as an array.
//' The spread operator is used to expand an array or object into individual elements or properties.
//' Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
//' Rest parameter is used in function declaration whereas the spread operator is used in function calls

function sum(a, b, ...c) {   // rest parameter in function declaration
    return a + b + c.reduce((acc, num) => acc + num, 0);
}

const c = [3, 4, 5];
console.log(sum(1, 2, ...c)); // spread operator in function call (spreads array)



//% What are callbacks?
//' A callback is a function that is passed as an argument to another function and is executed after the completion of that function.
//' Callbacks are a technique of ensuring that a particular code does not run until another code has completed its execution.
{
    function add(a, b, cb) {
        let result = a + b;
        cb(result);  // Executes the callback with the result
    }
    // 2,4 se apna calculation kro aur jb wo ho jaye to, ()=>{} ye function ko run kr dena
    add(2, 4, (val) => { console.log(val); });
}



//% What is the use of promises in javascript?
//' Promises are a way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states: Pending, Fulfilled, or Rejected.
//' A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.
//' resolve is called when the operation is successful. reject is called when the operation fails or encounters an error

//# Creating a Promise: Use resolve to signal success, and reject for failure.
function sumOfThreeElements(...elements) {
    const promise = new Promise((resolve, reject) => {
        if (elements.length > 3) {
            reject("Only three elements or less are allowed");
        } else {
            const sum = elements.reduce((acc, val) => acc + val, 0);
            resolve("Sum: " + sum);
        }
    });
    return promise;
}
//# Consuming a Promise: Use then() for success and catch() for errors.
sumOfThreeElements(4, 5, 6).then(console.log).catch(console.log);   // Success
sumOfThreeElements(7, 0, 33, 41).then(console.log).catch(console.log); // Error



//% Difference between async await, Promise and callback.
//#	Callbacks: Simple but can get messy with nested functions. Can lead to callback hell (nested callbacks that are hard to read and maintain). Requires manual error handling in each callback.
//#	Promises: Cleaner and better for chaining multiple tasks. Easier to chain and manage using .then() and .catch(). Centralized error handling with .catch().
//#	Async/Await: Simplifies Promises, making async code easier to read and write.

//' Callbacks: A callback is a function passed to another function to run after the first function finishes. It works but can get messy with many layers of nesting (known as "callback hell").
//' Think of it like: “When you're done, call this function.”
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}
fetchData((result) => console.log(result)); // Output: Data fetched

//' Promises: A Promise is an object that represents the eventual result of an asynchronous task. Instead of passing a function, you use .then() to handle success and .catch() for errors. Promises are more readable than callbacks, especially for chaining multiple tasks.
//' Think of it like: “Promise me you’ll return the result when you’re done.”
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});
fetchData.then((result) => console.log(result)); // Output: Data fetched

//' Async/Await: async/await makes working with Promises even easier by letting you write code that looks synchronous. It’s cleaner and more readable, especially for handling multiple tasks in sequence.
//' Think of it like: “Wait for this task to finish before moving on.”
async function fetchData() {
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
    return result; // Resolves with "Data fetched"
}
fetchData().then((data) => console.log(data)); // Logs: "Data fetched"



//% What are generator functions?
//' Generator functions are a special class of functions that can be stopped midway and continue from where they had stopped, and they are declared with the function* keyword.
{
    function* simpleGenerator() {
        let i = 0;
        while (i < 3) {
            yield i++;
        }
    }
    let sG = simpleGenerator();
    console.log(sG.next()); // Outputs: { value: 0, done: false }
    console.log(sG.next()); // Outputs: { value: 1, done: false }
    console.log(sG.next()); // Outputs: { value: 2, done: false }
    console.log(sG.next()); // Outputs: { value: undefined, done: true }

    // Loop
    // for (const s of sG) {
    //     console.log(s)
    // }
}



//% Difference between Async/Await and Generators
//' Async-await functions are executed sequentially one after another in an easier way. Async/Await function might throw an error when the value is returned.
//' Generator functions are executed with one output at a time by the generator’s yield by yield. The ‘value: X, done: Boolean’ is the output result of the Generator function.



//% Are Java and JavaScript the same?
//' Java and JavaScript are completely different languages. Java is object-oriented, used for enterprise applications, and runs on the JVM. JavaScript is a lightweight, interpreted scripting language for creating dynamic web content, running directly in browsers.