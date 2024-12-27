{


    //$ npm install -g typescript
    //$ tsc --init

    //$ let a = 10
    //$ a = "Hello"
    //# JS (no complain)
    //% TS (error)

    //' JS: Dynamically typed. Interpreted directly by browsers. Errors occur at runtime.
    //' TS: Statically typed. Compiled to JavaScript using a TypeScript compiler. Errors detected during compilation.


    //! Basic Types Example in TypeScript

    //' 1. Primitive types
    let age: number = 25; // Number type
    let name: string = "Vikas"; // String type
    let isStudent: boolean = true; // Boolean type

    //' 2. Arrays
    let scores: number[] = [90, 80, 85]; // Array of numbers
    let fruits: string[] = ["apple", "banana", "cherry"]; // Array of strings
    let mixedArray: (string | number | boolean)[] = [];

    //' 3. Tuples
    let person: [string, number] = ["Vikas", 25]; // Tuple with a string and a number

    //' 4. Enums
    enum StatusCode {
        Success = 200,        // Success
        NotFound = 404,       // Not Found
        BadRequest = 400,     // Bad Request
        Unauthorized = 401    // Unauthorized
    }
    let status: StatusCode = StatusCode.Success;

    //' 5. Any
    //` any: Allows any type without type-checking, disabling TypeScript's type safety.
    let randomValue: any = 10; // Can hold any value
    randomValue = "Hello"; // No error

    //' 6. Unknown
    //` unknown: Allows any type but requires type-checking before use, ensuring safer code.
    let unknownValue: unknown = 10; // Can hold any value
    unknownValue = "Hello"; // No error
    if (typeof unknownValue === "string") {
        console.log(unknownValue.toUpperCase()); // Safe to use
    }

    //' 7. Void
    function logMessage(message: string): void {
        console.log(message); // This function does not return a value
    }

    //' 8. Null
    let emptyValue: null = null; // Represents an intentional absence of value

    //' 9. Undefined
    let notAssigned: undefined; // Declared but not assigned a value

    //' 10. Never
    function throwError(message: string): never {
        throw new Error(message); // Function that never returns
    }



    //! Interface 
    interface User {
        name: string;
        email: string;
        password: string;
        age?: number;      // optional
    }

    function getDataOfUser(user: User) {
        console.log(user)
    }

    //! Types
    type value = string | number | boolean;
    let val: value;





}

