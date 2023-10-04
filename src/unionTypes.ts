export default function unionTypes() {
  let age: number | string = 21;
  age += 23;
  age = '24';

  type Point = {
    x: number;
    y: number;
  };

  type Loc = {
    latitude: number;
    longitude: number;
  };

  const coordinates = (): Point | Loc => {
    if (Math.random() < 0.5) {
      return { x: 88.9, y: 24.5 } as Point;
    }

    return { latitude: 88.88, longitude: 44.4 } as Loc;
  };
  const coords = coordinates();
  console.log(coords, typeof coords);

  const printAge = (age: number | string): void => {
    console.log(`You are ${age} years old`);
  };
  printAge('31');
  printAge(31);

  const calculateTax = (price: number | string, tax: number) => {
    // simple type narrowing
    if (typeof price === 'string') {
      price = price.replace('$', '');
      return parseFloat(price) * tax;
    }

    return price * tax;
  };
  console.log(calculateTax(25, 0.5));
  console.log(calculateTax('$25', 0.5));

  // AVOID AT ALL COST LOL!
  // const stuff: any[] = [1, 2, 3.0, true, 'asdfg'];

  const stuff: (number | string)[] = [];
  stuff.push(1);
  stuff.push('hello');

  // Literal Types
  const zero: 0 = 0;
  let role: 'admin' | 'user' = 'user';
  role = 'admin';
  let mood: 'happy' | 'sad' = 'happy';
  mood = 'sad';

  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

  let today: DayOfWeek = 'Monday';
  console.log(today);
}
