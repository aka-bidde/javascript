// * Session 1 Outline

/*
TODO: Intro to JavaScript
TODO: Basic Syntax
TODO: Variables
TODO: Data Types
*/
// !For all references use: https://quickref.me/javascript
/* 

! Basic Syntax 

* As our JavaScript file is now linked to our HTML file
* we can write statements to run in our web browser.

? What are Statements - Commands that perform actions.

? Semi-Colons at the end of statements
! Implicit Semi-Colon - Automatic Insertion
* Add semi-colons as best practice to avoid tricky bugs

? Separate lines for statements

? Code Comments
*/

console.log("Hello World");

/* 
! The Console

* Our Web Console can be used to log messages and view data. 
* We can also use the Console to debug our code and read errors.

? What is console.log - A method that allows us to log data to the console.


! Semi-Colons ';'

* We must add a semi-colon at the end of our statements.

* JavaScript will automatically insert semi-colons if missed,
* however, as best practice to avoid bugs we should try to end
* all of our statements with them.

* We can write statements one after another on one line.

* Usually statements are separated onto different lines for readability.
*/

console.log("Hello"); console.log("World");console.log("Hello"); console.log("World");console.log("Hello"); console.log("World");

console.log("Hello");
console.log("World");

/* 
! Variables

* Variables are a way for us to store data under a label.

? RQ/WoN - How many ways can we define a variable in JavaScript? 3

! let 

* We declare a Variable with the 'let' keyword followed by
* the assingment operator '='

* As an example we will create a variable named 'greeting'
* and assign it the word "Hello"

* let assigned variables give us the ability to have block scope* 
!(scope will be covered later in the week)

! Note that variable names are case sensitive.
*/

let greeting = "Hello";

/* 
! Variables

* We can now reference the variable to access the data.

? DQ/WoN - How would we log the value of the 'greeting' variable to the console?
*/


console.log(greeting);

/* 
! Variables - var

* You may come across the 'var' keyword being used to declare
* variables. However, this is an older method. 

! Avoid using 'var' and stick to using 'let'
*/

/* 
! Variables - Reassign Values

* Once declared, we can assign new value to 'let' variables.

* To assign a new value to a variable we reference the variable
* name followed by the assignment operator (=) and the new value.

? DQ/WoN How would we assign our greeting variable a new value?
*/



greeting = "New Value";
console.log(greeting);

/* 
! Note that if you try to assign a new value using 'let' 
! you will encounter an error. 

! Errors will show in the console and indicate which line 
! of your JavaScript code is causing the error.
*/

/* 
! Variables - const

* We can declare constant variables with the 'const' keyword.

* The keyword 'const' should be used for variables where the data
* will not change, the value will remain constant. 

* const assigned variables give us the ability to have block scope* 
? DQ - Which other variable assignment method allows us to have block scope? let
*/

const sky = "Blue";
console.log(sky);

/* 
! With 'const' variables the value can not be updated.

* 'const sky = "Green"' or 'sky = "Green"'

! Both examples would cause an error as the value is constant.
*/


// ? NP - Variables
/* 
! Data Types 

* Values in JavaScript can be different data types.

? Dynamically Typed - Data Types exist but variables arent bound to type

* Our 'greeting' and 'sky' variables are examples of String's.

? String - Surrounded by "Quotes"
! 'Single Quotes'
! "Double Quotes"
! `Backticks`
*/

let string1 = 'Single Quotes'; // '' (@)
let string2 = "Double Quotes"; // " " Shift  + 2(")
let string3 = `Backticks`; // Template Literal - `${greeting} can be used in this sentence`


/* 
! Data Types

? Number
* Number - Integer and Floating Points
! Mathematical Operations 

* BigInt - Represents Integers of arbitrary length 
! Rarely Needed !
*Resource: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/

let number = 100;
let floatingPoint = 1.5;

// * We can use Mathematical operators to execute Mathematical operations
console.log(number + 100);
console.log(number / 2);
console.log(number * 2);

//? DQ/WoN Which data type is the following variable?
let test = "100";



// ! Anything wrapped in quotes or backticks = String

/* 
! Data Types

* Boolean - True or False
! Evaluate comparisons or conditions
*/

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);

/* 
! Data Types

* Null - Doesn't fall under any specific type
! Forms its own 'null' type
*/

let empty = null;
console.log(typeof(empty));

/* 
! Data Types

* Undefined - Value not assigned therefore it is undefined
! Variables declared but not assigned
*/
console.log(undefined);

/* 
! Data Types

* Object and Arrays - Will be touched on in depth later this week

* Symbol - Will be relevant after Objects
*/

// ? NP - Data Types

/* 
! String Concatenation
*/

let firstName = "Narayan";

console.log(firstName);

console.log("My name is" + firstName + "."); // My name isNarayan.

console.log("My name is" + " " + firstName + "."); // My name is Narayan.

console.log("My name is " + firstName + "."); // My name is Narayan.


/*
! Tasks:

? 1: Create a variable that stores your name, using string concatenation I would like you to construct a string 
? and use an alert to display the greeting to the user e.g. “Hello John”.

? 2: Create additional variables to store your favourite colour and your favourite film or tv series. 
? Using string concatenation construct and log a sentence including your name and these values to the console.

? 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. 
? I then want you to update the values for the "breakfast", "lunch" and dinner "variables" to what you are 
? eating today and log the new values to the console. 
*/



// 1: 

alert("Hello " + firstName);

// 2: 
let favColor = "Blue";
let favSeries = "Breaking Bad";

console.log("Hi my name is " + firstName + " my favourite colour is " + favColor + 
" and my favourite series is " + favSeries);

let breakfast = "cereal";
let lunch = "toast";
let dinner = "Roast Dinner";

console.log("Breakfast: " + breakfast + ".")