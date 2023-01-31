/* eslint-disable no-unused-vars */
import { Character } from './character';

export class Fighter extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    public weapon: string,
    public dexterity: number
  ) {
    super(charName, family, age);
  }

  greetings(): string {
    return super.greetings() + 'Primero pego y luego pregunto';
  }
}
