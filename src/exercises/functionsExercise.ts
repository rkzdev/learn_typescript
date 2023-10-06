// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

function twoFer(name: string = 'you'): string {
  return `one for ${name}, one for me`;
}

function isLeapYear(year: number): boolean {
  if (year % 400 === 0 || (year % 4 === 0 && year && year % 100 !== 0)) {
    return true;
  }

  return false;
}

const functionExercise = (): void => {
  console.log(twoFer());
  console.log(twoFer('Kristine'));

  console.log('2002 is leap year?', isLeapYear(2002));
  console.log('2016 is leap year?', isLeapYear(2016));
  console.log('2004 is leap year?', isLeapYear(2004));
  console.log('2006 is leap year?', isLeapYear(2006));
  console.log('1988 is leap year?', isLeapYear(1988));
  console.log('1900 is leap year?', isLeapYear(1900));
  console.log('2000 is leap year?', isLeapYear(2000));
  console.log('1992 is leap year?', isLeapYear(1992));

  // closure
  const total = closure(4);
  for (let i = 1; i <= 10; i++) {
    console.log(total());
  }

  const fibonacci = fib();
  for (let i = 0; i <= 10; i++) {
    console.log(fibonacci());
  }
};

const fib = () => {
  let a = 0;
  let b = 1;

  return function() {
    let current = a;
    a = b;
    b = current + b;

    return current;
  };
};

const closure = (num: number): (() => number) => {
  let sum = 0;

  return (): number => {
    sum += num;
    return sum;
  };
};

export { functionExercise };
