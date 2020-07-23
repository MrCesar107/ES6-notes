// Default params and concatenation

// ES5 old style
function oldFunction(name, age, country) {
    var name = name || 'Cesar';
    var age = age || 22;
    var country = country || 'Mexico';

    console.log(name, age, country);
}

// ES6 new style
function newFunction(name = 'Cesar', age = 22, country = 'Mexico') {
    console.log(name, age, country);
}

newFunction();
newFunction('Rogelio', 40, 'Colombia'); // with parameters

// ------ CONCATENATION --------

// ES5 old style
let hello = 'Hello';
let world = 'World';
let oldEpicPhrase = hello + ' ' + world;
console.log(oldEpicPhrase);

// ES6 new style
let newEpicPhrase = `${hello} ${world} in ES6 :D`; // Template literal
console.log(newEpicPhrase);

// ------ String multi-line --------

// ES5 old style
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
    +'Proin pellentesque velit vel euismod hendrerit.';

console.log(lorem);

// ES6 new style
let loremMultiline = `ES6 ahora soporta varias lineas en un mismo String
sin necesidad de concatenar varias cadenas de texto, como se hacia
en ES5 o en versiones anteriores de JS.`;
console.log(loremMultiline);

// ------ Destructuring --------

// ES5 old style
var person = {
    'name': 'Cesar',
    'age': 22,
    'country': 'MX'
};
console.log(person.name, person.age, person.country);

// ES6 new style
let { name, age } = person; // Object person destructuring
console.log(name, age);

// ------ Spread operator --------

// This feature was introduced in ES6+
var team = ['Oscar', 'Cesar', 'Ricardo'];
var team2 = ['Susana', 'Edna', 'Valeria'];

let education = ['David', ...team, ...team2]; // Using spread operator '...'
console.log(education);

// ------ let, var and const --------

// ES5 old style
var variable = 1; // Declaring a global scope variable

// ES6 new style
let newVariable = 2; // Declaring a limited scope variable
const PI = 3.1416; // Declaring a constant value

// Notes: The main difference between var and let is that let has a 'scope'.
// In JS or ES6 the scope is like a rule when you want use a variable.
// For example, if you define a let variable in your file outside a block code
// like a function or a conditional, thar varibale has 'global scope' and can be
// used wherever in your code. If the variable is defined inside a block or
// function, it has a local scope and it can only be used inside the block or
// function. Const is a varibale that it's value can never be changed or re-
// assigned. The const's scope can be only local.

/*
**************************************************
**    KEYWORD      **  const  **  let  **  var  **
**************************************************
**  global scope   **   NO    **  NO   **  YES  **
**************************************************
**  function scope **   YES   **  YES  **  YES  **
**************************************************
**   block scope  **    YES   **  YES  **   NO  **
**************************************************
**     can be     **    NO    **  YES  **  YES  **
**   reassinged   **          **       **       **
**************************************************
*/
