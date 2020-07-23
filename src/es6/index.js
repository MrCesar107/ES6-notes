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
