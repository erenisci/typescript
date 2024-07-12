/* 
// const and let
let age: number = 5;
age = 10;

const author: string = 'Eren';
// author = 'Selin'; // can't change
*/

/* 
// arrow func.
const func = (start: number, end: number): void => {
  for (let i = start; i < end; i++) console.log(`${i - start + 1}. ${i}`);
};
func(9, 17);
*/

/* 
// default func. parameters
const func = (start: number = 10, end: number = 1): void => {
  if (start > end) {
    const temp: number = start;
    start = end;
    end = temp;
  }

  for (let i = start; i < end; i++) console.log(`${i - start + 1}. num = ${i}`);
};
func();
*/

/* 
// rest operator
const func = (...array: number[]) => {
  console.log(array);
  let result: number = 0;
  for (let i = 0; i < array.length; i++) result += array[i];
  return result;
};

const total = func(1, 2, 3, 4, 5, 6);
console.log(total);
*/

/* 
// spread parameters
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [5, 4, 3, 2, 1];
console.log(...arr1, ...arr2);

const arr3: number[] = [...arr1, 6, 7];
console.log(arr3);

const objectOriginal: {
  name: string;
  age: number;
} = {
  name: 'Eren',
  age: 23,
};
console.log(objectOriginal);

const objectUpdated = { ...objectOriginal, age: 31, city: 'Samsun' };
console.log(objectUpdated);
*/

// destructuring
const hobbies: string[] = [
  'Sports',
  'Software',
  'TypeScript',
  'React',
  'NodeJS',
  'JavaScript',
];
const [myHobbies, myHobbies2, ...hobbiesRest] = hobbies;

const object: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Eren',
  age: 23,
  hobbies: [myHobbies, myHobbies2],
};
console.log(object);
