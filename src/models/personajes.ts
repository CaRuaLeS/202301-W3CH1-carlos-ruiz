import { Character } from './classes/character';
import { King } from './classes/king';
import { Fighter } from './classes/fighter';
import { Adviser } from './classes/adviser';
import { Squire } from './classes/squire';

const kingJoffrey = new King('Joffrey', 'Baratheon', 72, 15);
const fighterJaime = new Fighter('Jaime', 'Lannister', 43, 'Mazo', 7);
const fighterDaenerys = new Fighter('Daenerys', 'Targaryen', 25, 'Dragon', 10);
const adviserTyrion = new Adviser('Tyrion', 'Lannister', 50, fighterDaenerys);
const squireBronn = new Squire('Bronn', '', 26, fighterJaime, 7);

export const characters: Character[] = [
  kingJoffrey,
  fighterJaime,
  fighterDaenerys,
  adviserTyrion,
  squireBronn,
];
