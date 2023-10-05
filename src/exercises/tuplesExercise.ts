const tuplesExercise = () => {
  type Car = [string];
  // which of the following answer does not result in typescript Error
  const vehicle: Car = ['Toyota'];
};

export { tuplesExercise };
