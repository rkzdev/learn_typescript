import arrays from './src/arrays';
import strategyPattern from './src/design_patterns/strategy.pattern';
import enums from './src/enums';
import { arraysExercise } from './src/exercises/arraysExercise';
import { functionExercise } from './src/exercises/functionsExercise';
import { objectsExercise } from './src/exercises/objectsExercise';
import { unionTypesExercise } from './src/exercises/unionTypesExercise';
import functions from './src/functions';
import interfaces from './src/interfaces';
import objects from './src/objects';
import tuples from './src/tuples';
import unionTypes from './src/unionTypes';
import variables from './src/variables';

function main(): void {
  console.log('Typescript Course');

  // variables
  // variables();

  // functions
  // functions();
  // functionExercise();

  // objects
  // objects();
  // objectsExercise();

  // arrays
  // arrays();
  // arraysExercise();

  // union types
  // unionTypes();
  // unionTypesExercise();

  // tuples
  // tuples();

  // enums
  // enums();

  // interfaces();

  // Strategy patterns
  strategyPattern();
}

main();
