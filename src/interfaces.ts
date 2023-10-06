// Interfaces

// Interfaces serve almost the exact same purpose as type aliases
// (with a slightly different syntax)

// We can use them to create reusable, modular types that describe the
// shape of objects
interface Person {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;

  sayHi: (name: string) => string;
  who(): void;
}
// Reopening Interfaces
// add additional properties on an existing interface
interface Person {
  maritalStatus: 'single' | 'married';
}

interface Point {
  x: number;
  y: number;
}

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

interface ServiceDog extends Dog {
  job: string;
}

export default function interfaces() {
  const pt: Point = { x: 123, y: 1234 };
  console.log(pt);

  const thomas: Person = {
    id: 1,
    name: 'Thomas',
    age: 31,
    nickname: 'Tom',
    maritalStatus: 'single',

    sayHi: (name: string) => name,
    who() {
      console.log('who are you?');
    },
  };
  console.log(thomas);
  console.log(`Hi ${thomas.sayHi('Nick')}`);
  thomas.who();
  // thomas.id = 2; cannot reassign readonly property

  const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(discount) {
      return this.price * (1 - discount);
    },
  };

  console.log(shoes.applyDiscount(0.4));

  const elton: Dog = {
    name: 'Elton',
    age: 3,
    breed: 'aspin',
    bark() {
      return 'bark bark brak';
    },
  };
  console.log(elton);
  console.log(elton.bark());

  const serviceDog: ServiceDog = {
    name: 'doggy',
    age: 8,
    breed: 'german',
    bark() {
      return 'woof woof woff';
    },
    job: 'medical',
  };
  console.log(serviceDog);
  console.log(serviceDog.bark());
}

function calloutDogs<T extends Dog>(dogs: T[]) {
  for (let d of dogs) {
    console.log(d);
  }
}

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}
