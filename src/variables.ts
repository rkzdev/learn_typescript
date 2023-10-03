export default function() {
  // Basics of type annotations
  let bookTitle: string = "The art of deception";
  let bookAuthor: string = "Kevin Mitnick";
  let bookPublishedDate: number = 2001;
  let bookIsPublished: boolean = true;

  console.log(
    `Title: ${bookTitle}, Author: ${bookAuthor}, Published Date: ${bookPublishedDate}, Published?: ${bookIsPublished}`,
  );

  // Type Inference
  let name = "Raven";
  console.log(name);

  let nothing: null = null;
  console.log(nothing);
  let foo: undefined = undefined;
  console.log(foo);

  // Any Type
  // defeats the purpose of TS and types
  // let myAnyType: any = "This is a any type";
  // myAnyType = 29;
  // myAnyType = true;
  // myAnyType()
  // myAnyType.toUpperCase()

  // Delayed Initialization and Implicit Any
  const movies = ["Arriaval", "The Thing", "Aliens", "Amadeus"];
  let foundMovie: string | null = null;

  for (let movie of movies) {
    if (movie === "Amadeus") {
      foundMovie = movie;
    }
  }
  console.log(foundMovie);
}
