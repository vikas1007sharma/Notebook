// JavaScript is a versatile programming language widely used in web development to provide interactivity to web pages. It can run both inside and outside the browser; outside the browser, environments like Node.js allow JavaScript to be used for server-side programming. Every browser has a JavaScript engine: Chrome uses the V8 engine, while Safari uses the JavaScriptCore engine (also known as Nitro).


//' Node js: (V8 engine + C++) 
//' Nodejs is a runtime environment for javascript

//' Node.js allows JavaScript to run outside the browser, enabling server-side and standalone applications.
//' Javascript can talk to native machine because of c++, for eg: file handling 
//' You can create webservers in Javascript Language
//' Node.js also enables JavaScript to create web servers, handle file operations, and interact with databases, making it a powerful tool for backend development.


//' In environments outside the browser, such as Node.js, certain DOM-related functions like `document.getElementById`
//' and `alert()`,`document`, `window` are not available because they rely on the browser's Document Object Model (DOM).


//' Node.js REPL (Read-Eval-Print Loop) is an interactive shell where you can write and execute JavaScript code line-by-line.
// node (hit enter)     
// you will enter in repl


//' API stands for Application Programming Interface, which is a set of rules and protocols that allow software applications to communicate with each other.


//% Node js Architecture
//# Node.js uses an event-driven, non-blocking architecture. Incoming requests are placed in the Event Queue, where the Event Loop processes them:
//' Non-blocking (Asynchronous): Handled by system APIs, allowing the Event Loop to continue processing other tasks.
//' Blocking (Synchronous): Sent to the Thread Pool for execution, which can block the Event Loop until completion.
//' Results from both are returned to the Event Queue, and their callbacks are executed by the Event Loop.


//% Module 
//' A module in JavaScript (and other programming languages) is a self-contained block of code that groups related functions, variables, and classes together, making it easier to organize, reuse, and maintain code. Modules help keep code organized, prevent conflicts between different parts of a program, and enable the sharing of code across multiple files.

//' version 4.18.2
//' first: major, second: recomended, third: minor



//% FILE HANDLING
const fs = require('fs'); // Import the filesystem module
// writeFile, readFile, appendFile, unlink, rename

// Write to a file (creates or overwrites)
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) console.log(err); // Log any errors that occur
    else console.log('File written successfully'); // Confirmation message
});

// BLOCKING
console.log(1)
const results = fs.readFileSync('example.txt', 'utf8');
console.log(results)
console.log(2)
// 1
// Hello, World!
// 2

// non-blocking
console.log(1)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) console.log(err); // Log any errors that occur
    else console.log(data); // Log the content of the file
});
console.log(2)
// 1
// 2
// Hello, World!



//% HTTP SERVER
const http = require('http')

const myServer = http.createServer((req, res) => {
    res.end("Hello from server")
});

// http methods: Get, Post, Put, Patch, Delete
myServer.listen(8000, () => {
    console.log(`Server started on: ${8000}`)
})



//% http request
//# GET, POST, PUT, PATCH, DELETE
//# PUT: Replaces the entire resource with a new one. Request Body: Contains the complete representation of the resource. If any fields are omitted, they are set to their default values or null, effectively overwriting the resource.
//# PATCH: Partially updates a resource. Request Body: Contains only the fields to be updated, leaving other fields unchanged.



//% EXPRESSJS 
const express = require('express')
const app = express()

// Middleware, allows the application to parse URL-encoded data sent by forms
app.use(express.urlencoded({ extended: false }))                         // middleware1

// Custom middleware
app.use((req, res, next) => {                                            // middleware2
    if (req.body && req.body.name === 'hacker') {
        return res.status(403).json({ message: "You are a hacker" });
    } else {
        next(); // Pass control to the next middleware/route handler
    }
});

app.get('/', (req, res) => {
    return res.send("Home page")
})
app.listen(8000, () => {
    console.log("Running on 8000")
})


//% Middleware
//' Middleware in Express.js are functions executed during the request-response cycle. 
// Middleware functions have access to req, res, and next. They can:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.



//$ STATUS CODES

//% Informational (1xx)
//' 100 Continue: The server received the initial part of the request and the client should continue.
//' 102 Processing: The server is processing the request but no response is ready yet.
//% Success (2xx)
//' 200 OK: The request was successful.
//' 201 Created: A new resource was successfully created.
//' 202 Accepted: The request has been accepted but not yet processed.
//% Redirection (3xx)
//' 307 Temporary Redirect: The requested resource has been temporarily moved to a different URI.
//' 308 Permanent Redirect: The requested resource has been permanently moved to a new URI.
//% Client Errors (4xx)
//' 400 Bad Request: The server could not understand the request due to invalid syntax.
//' 401 Unauthorized: Authentication is required to access the resource.
//' 402 Payment Required: Reserved for future use (sometimes used for digital payment systems).
//' 404 Not Found: The requested resource could not be found on the server.
//% Server Errors (5xx)
//' 500 Internal Server Error: The server encountered an unexpected condition.




//$ MONGODB
//' mongoose.connect(url).then().catch()
//' const userSchema = new mongoose.Schema({});
//' const User = mongoose.model('user', userSchema)

//' const getallusers = Users.find({})       
//' const result = await User.create({})
//' const user = Users.findById(req.params.id)
//' const user = await User.findByIdAndUpdate(req.params.id)
//' const user = await User.findByIdAndDelete(req.params.id)



//% Model view controller (MVC), controller-> model-> view
//' breaks into three logical component
//' controller: manipulates model 
//' model: updates view


//$ Axios vs fetch
//# JSON Stringify:
//' Fetch: Requires you to manually convert request bodies to JSON with JSON.stringify.
//' Axios: Automatically converts objects to JSON for request bodies.

//# Manual Error Handling:
//' Fetch: Only rejects on network errors; you must manually check for HTTP status errors.
fetch('url')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
    })
    .catch(error => console.error(error));
//' Axios: Automatically rejects on HTTP errors, allowing cleaner error handling with catch.
axios.get('url')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));



//$ Session - Based Authentication
//' the server maintains session data.
//' The server can explicitly destroy a session to log out a user.
//' Sessions are stored in server memory or a database.
//' The session ID is stored in and sent via cookies.

//$ Token-Based Authentication
//' stateless; the server doesn’t maintain user state.
//' Cannot directly invalidate tokens unless additional mechanisms (like a token blacklist) are implemented.
//' No server storage needed for tokens.
//' Tokens (e.g., JWTs) embed user details and permissions in the payload.



//$ Ways to send data from client to server: path parameters, query parameters, headers, body.
//' Path parameters are used to send data as part of the URL, typically in RESTful APIs. They are placed directly in the URL path.
// Client (JavaScript using fetch)
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => console.log(data));
// In this example, 123 is a path parameter representing the user ID.

//' Query parameters are used to send data in the URL after a question mark (?), usually for filtering or sorting.
// Client (JavaScript using fetch)
fetch('https://api.example.com/users?age=25&sort=asc')
  .then(response => response.json())
  .then(data => console.log(data));
// Here, age=25 and sort=asc are query parameters that are appended to the URL.

//' Headers are used to send metadata or authentication tokens along with the request.
// Client (JavaScript using fetch)
fetch('https://api.example.com/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
// In this example, the Authorization header is used to pass an authentication token.

//'The body is used to send data with methods like POST or PUT, often in JSON format.
// Client (JavaScript using fetch)
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data));



//$ Event loop
//' The event loop in Node.js is a fundamental mechanism that allows Node.js to handle asynchronous operations. It enables non-blocking I/O operations, meaning Node.js can handle multiple operations simultaneously without waiting for one operation to finish before starting the next.
//# Call Stack: Synchronous code is executed here, one function at a time.
//# Web APIs: Asynchronous operations (like setTimeout, I/O) are handled outside the call stack by the Web APIs.
//# Task Queue: Once Web APIs finish an asynchronous operation, the callback is added to the task queue.
//# Event Loop: The event loop continuously checks if the call stack is empty. If it is, it moves callbacks from the task queue to the call stack for execution.