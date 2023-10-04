const unionTypesExercise = () => {
  // Create a variable called highScore that can be a
  // number or a boolean
  const highScore: number | boolean = 0;

  // Create an array called stuff
  // it can be an array of numbers OR an array of strings
  // it cannot be an array of numbers and string (mixed together)
  const stuff: string[] | number[] = [];

  // Create a literal type called SkillLevel
  // There are 4 allowed values: "Beginner", "Intermediate", "Advanced", "Expert"
  type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

  // Create a type called skiSchollStudent
  // name must be a string
  // age must be a number
  // sport must be 'ski' or 'snowboard'
  // lelvel must be a value from the SkillLevel type
  type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    skillLevel: SkillLevel;
  };

  const skiSchoolStudent: SkiSchoolStudent = {
    name: 'Johny',
    age: 12,
    sport: 'ski',
    skillLevel: 'Beginner',
  };

  // Define a type to represent an RGP color
  type RGB = {
    r: number;
    g: number;
    b: number;
  };

  type HSL = {
    h: number;
    s: number;
    l: number;
  };

  const colors: (RGB | HSL)[] = [
    {
      r: 255,
      g: 255,
      b: 255,
    },
    {
      h: 88,
      s: 84,
      l: 90,
    },
  ];

  const greet = (value: string | string[]): void => {
    if (typeof value === 'string') {
      console.log(`Hello, ${value}`);
    } else {
      for (let v of value) {
        console.log(`Hi, ${v}`);
      }
    }
  };

  greet('raven');
  greet(['raven', 'kristine', 'iya', 'elia']);
};

export { unionTypesExercise };
