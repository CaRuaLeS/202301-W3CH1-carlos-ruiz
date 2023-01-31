/* eslint-disable no-unused-vars */
import { Character } from './character';
import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './squire';

export class Adviser extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    public whoToAdvise: King | Fighter | Adviser | Squire
  ) {
    super(charName, family, age);
  }

  greetings(): string {
    return (
      super.greetings() + 'No sé por qué, pero creo que voy a morir pronto'
    );
  }
}
