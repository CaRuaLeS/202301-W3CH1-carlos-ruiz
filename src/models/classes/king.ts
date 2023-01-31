/* eslint-disable no-unused-vars */
import { Character } from './character';

export class King extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    public kingdomYears: number
  ) {
    super(charName, family, age);
  }

  greetings(): string {
    return super.greetings() + 'Vais a morir todos';
  }
}
