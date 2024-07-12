/* 
class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log(`ID: ${this.id}
Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd3'; its readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Length: ' + this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('id1', 'Accounting');
accounting.describe();

const copyAccounting = {
  id: 'id2',
  name: 'DUMMY',
  describe: accounting.describe,
};
copyAccounting.describe();

console.log('*****');

accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Selin');
accounting.printEmployeeInformation();
*/

/* 
abstract class Department {
  static fiscalYear = 2024;
  // private employees: string[] = [];
  protected employees: string[] = []; // for inherit class (push)

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  // abstraction
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Length: ' + this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (!this.lastReport) throw new Error('No report found.');

    return this.lastReport;
  }

  set mostRecentReport(report: string) {
    if (!report) throw new Error('Please pass in a valid report!');
    this.addReport(report);
  }

  addEmployee(name: string) {
    if (name === 'Eren') return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe(): void {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  printReports() {
    console.log(this.reports);
  }
}

// static
// const employee1 = Department.createEmployee('Eren');
// console.log(Department.fiscalYear);
// console.log(employee1);

const departmentIT = new ITDepartment('id1', ['Eren']);
departmentIT.describe();
console.log(departmentIT);

const departmentAccounting = new AccountingDepartment('id2');
// console.log(departmentAccounting.mostRecentReport); // No report found
departmentAccounting.addReport('Something went wrong...');
departmentAccounting.addEmployee('Max');
departmentAccounting.addEmployee('Eren');
departmentAccounting.addEmployee('Selin');
departmentAccounting.describe();
console.log(departmentAccounting);

console.log('Most recent report: ' + departmentAccounting.mostRecentReport);

departmentAccounting.mostRecentReport = 'TypeScript is the best!';
console.log('Most recent report: ' + departmentAccounting.mostRecentReport);
// departmentAccounting.mostRecentReport = ''; // Please pass in a valid report!
*/

// interfaces
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number): number => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Aged {
  age: number | string;
}

interface Greetable extends Named, Aged {
  greet(name: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 23;

  constructor(name?: string) {
    if (name) this.name = name;
  }

  greet = (phrase: string): void => {
    if (this.name) console.log(`${phrase} ${this.name}`);
    else console.log('Hi!');
  };
}

// let user1: Greetable = {
//   name: 'Eren',
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

let user1: Greetable;
// user1.name = 'Max'; // readonly!
user1 = new Person('Eren');
user1.greet('Hello, I am ');

const user2: Greetable = new Person();
user2.greet('Hello, I am ');
