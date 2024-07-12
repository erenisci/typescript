/*
// Types
const add = (
  n1: number,
  n2: number,
  showRes: boolean,
  phrase: string
): string => {
  const result = n1 + n2;
  return showRes ? phrase + result : 'Result is: ...';
};

let number1: number;
number1 = 5;
// number1 = '5';

const number2 = 2.8;
const printResult = true;

let resultPhrase = 'Result is: ';
// resultPhrase = 5;

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

// Objects
const person: { name: string; age: number } = {
  name: 'Eren',
  age: 23,
};
*/
/*
// Arrays
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Eren',
  age: 23,
  hobbies: ['Sports', 'Software'],
  role: [2, 'author'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

person.role = [0, 'admin'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
*/
/*
// enum
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Eren',
  age: 23,
  hobbies: ['Sports', 'Software'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) console.log(`is ${Role.ADMIN}`);
*/
/*
// Union types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  i1: Combinable,
  i2: Combinable,
  i3: ConversionDescriptor
): Combinable => {
  let result: Combinable = '';
  if (i3 === 'as-number') result = +i1 + +i2;
  else if (i3 === 'as-string') result = i1.toString() + ' and ' + i2.toString();
  return result;
};

const combinedAges: Combinable = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames: Combinable = combine('Max', 'Anna', 'as-string');
console.log(combinedNames);
*/
/*
// Function Types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  i1: Combinable,
  i2: Combinable,
  i3: ConversionDescriptor
): Combinable => {
  let result: Combinable = '';
  if (i3 === 'as-number') result = +i1 + +i2;
  else if (i3 === 'as-string') result = i1 + ' and ' + i2;
  return result;
};

// let combineValues: Function;
let combineValues: (
  a: Combinable,
  b: Combinable,
  c: ConversionDescriptor
) => Combinable;
combineValues = combine;

combineValues = combine;
// combineValues = 5; // Error

console.log(combineValues(20, 30, 'as-number'));
*/
// unknown
var userInput;
var userName;
userInput = 5;
userInput = 'Eren';
// userName = userInput; // Error if userInput:unknown not any
// never
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occured!', 500);
