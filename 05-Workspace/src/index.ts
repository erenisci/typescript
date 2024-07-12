/* 
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Eren',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) console.log('Privileges: ' + emp.privileges);
  if ('startDate' in emp) console.log('Start Date: ' + emp.startDate);
};

printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Selin', startDate: new Date() });
*/

/* 
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo... ' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
};

useVehicle(v1);
useVehicle(v2);
*/

/* 
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 50 });
*/

/* 
// const userInputElement = document.getElementById(
//   'user-input'
// ) as HTMLInputElement;
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')
);
userInputElement.value = 'Hi there!';
*/

/* 
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
*/

/* 
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// func. overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

const result = add('Eren', 'Isci');
result.split(' ');
*/

type Job = {
  title: string;
  description: string;
};

type User = {
  id: string;
  name: string;
  job?: Job;
};

const fetchedUserData: User = {
  id: 'u1',
  name: 'Eren',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = ''; // '' and 0 - if || null and undefined
const storedData = userInput ?? 'Default';
console.log(storedData);
