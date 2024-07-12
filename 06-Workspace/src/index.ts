/* 
// Generics
const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});
promise.then(data => {});
*/

/* 
// const merge = (objA: object, objB: object) => {
//   return Object.assign(objA, objB);
// };
// const mergedObj = merge({ name: 'Eren' }, { age: 23 });
// mergedObj.age; // TypeScript doesn't know .age

const merge = <T, U>(objA: T, objB: U): T & U => {
  // return Object.assign({}, objA, objB);
  return { ...objA, ...objB };
};

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'Eren', hobbies: ['Basketball'] },
  { age: 23 }
);
console.log(mergedObj);
*/

/* 
// Constraints
const merge = <T extends object, U extends number>(objA: T, objB: U) => {
  return Object.assign({}, objA, { age: objB });
};

const mergedObj = merge({ name: 'Eren', hobbies: ['Basketball'] }, 23);
console.log(mergedObj);
console.log(mergedObj.age);
*/

/* 
// interface Lengthy {
//   length: number;
// } // = T extends { length: number }

const countAndPrint = <T extends { length: number }>(
  elements: T
): [T, string] => {
  let descriptionText = 'Got no value.';
  if (elements.length === 1) descriptionText = 'Got 1 element.';
  else if (elements.length > 1)
    descriptionText = `Got ${elements.length} elements.`;
  return [elements, descriptionText];
};

console.log(countAndPrint(['Hi there!', 'Say hi!']));
*/

/* 
// keyof
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return 'Value: ' + obj[key];
};

extractAndConvert({ name: 'Eren' }, 'name');
*/

/* 
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Eren');
textStorage.addItem('Selin');
textStorage.removeItem('Eren');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
*/

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['Eren', 'Selin'];
// names.push('Max');
// names.pop();
