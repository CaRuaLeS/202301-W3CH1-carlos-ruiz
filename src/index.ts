import { King } from './king';
import { Fighter } from './fighter';

const king1 = new King('Peter', 'Collado', 23, true, 4);
const fighter1 = new Fighter('Peter', 'Collado', 23, true, 'Hammer', 5);

console.log(king1.greetings());
console.log(fighter1.greetings());
