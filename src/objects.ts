type Producer = {
  name: string;
};

type Writer = {} & Producer;

type Artist = {} & Producer;

type Song = {
  title: string;
  artist: Artist[];
  numStreams: number;
  credits: {
    producers?: Producer[];
    writers?: Writer[];
  };
};

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

type Name = {
  firstName: string;
  lastName: string;
};

type Coordinate = {
  x: number;
  y: number;
};

function printName(name: Name): string {
  return `First Name: ${name.firstName}, Last Name: ${name.lastName}`;
}

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function printSongDetails(song: Song): void {
  console.log(song);
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

export default function objects() {
  // Object literal
  const dog = {
    name: 'Doggy',
    breed: 'Philippine Shepherd',
    age: 0.5,
  };
  console.log(dog);

  const me: Name = { firstName: 'Raven', lastName: 'Paragas' };
  console.log(printName(me));

  // how come this gives me an error
  // console.log(
  //   printName({ firstName: "very", lastName: "confusing", bug: true }),
  // );
  // this happens because of excess property checking when object literal is
  // directly pass from a function

  const wth = { firstName: 'javascript', lastName: 'is wierd', bug: false };
  // but this one is fine
  console.log(printName(wth));

  const coordinates: Coordinate = { x: 43, y: 2 };
  console.log(coordinates);
  console.log(randomCoordinate());

  let person1: Person = {
    firstName: 'raven',
    lastName: 'paragas',
    age: 30,
  };
  console.log(printName(person1));

  const song1: Song = {
    title: 'Realest',
    artist: [{ name: 'Eminem' }, { name: 'EZ mil' }],
    numStreams: 1_000_000,
    credits: {
      producers: [{ name: 'Eminem' }, { name: 'EZ mil' }],
      writers: [],
    },
  };

  printSongDetails(song1);
  console.log(calculatePayout(song1));

  // readonly property
  type User = {
    readonly id: number;
    username: string;
  };

  const user: User = {
    id: 12837,
    username: 'catgirl',
  };
  console.log(user.id);
  // cannot override id property because it is readonly
  // user.id = 238974;

  // Intersection
  type Circle = {
    radius: number;
  };

  type Colorful = {
    color: string;
  };

  type ColorfulCircle = {
    smoothEdges: boolean;
  } & Circle &
    Colorful;

  const coloredCircle: ColorfulCircle = {
    radius: 8,
    color: 'rainbow',
    smoothEdges: true,
  };
  console.log(coloredCircle);
}
