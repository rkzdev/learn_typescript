type Movie = {
  title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

function getProfit({ boxOffice }: Movie): number {
  return boxOffice.grossWorldwide - boxOffice.budget;
}

const objectsExercise = () => {
  const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
      budget: 165000000,
      grossUS: 108327830,
      grossWorldwide: 400671789,
    },
  };

  const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2021,
    boxOffice: {
      budget: 95000000,
      grossUS: 27166770,
      grossWorldwide: 63833348,
    },
  };

  console.log(`Profit is: ${getProfit(dune)}`);
  console.log(`Profit is: ${getProfit(cats)}`);
};

export { objectsExercise };
