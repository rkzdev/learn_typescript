const arraysExercise = () => {
  // create an empty array of numbers called ages
  const ages: number[] = [];
  console.log(ages);

  // create an array variable called gameBoard that starts as
  // an emtpy array. It should be typed to hold a 2 dimensional array of strings.
  const gameBoard: string[][] = [];
  console.log(gameBoard);

  // Create a Product type that contains a name and price
  type Product = {
    name: string;
    price: number;
  };

  const getTotal = (products: Product[]): number => {
    let total = 0;
    for (let product of products) {
      total += product.price;
    }

    return total;
  };

  const products: Product[] = [
    {
      name: 'shampoo',
      price: 7.5,
    },
    {
      name: 'toothpaste',
      price: 89,
    },
    {
      name: 'tooth brush',
      price: 48,
    },
  ];

  const total = getTotal(products);
  console.log(`Total Price: ${total} PHP`);
};

export { arraysExercise };
