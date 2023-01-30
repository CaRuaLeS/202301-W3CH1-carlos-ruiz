import { Character } from './character';

export class King extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    isAlive: boolean,
    public kingdomYears: number
  ) {
    super(charName, family, age, isAlive);
    this.kingdomYears = kingdomYears;
  }

  greetings(): string {
    return super.greetings() + 'Vais a morir todos';
  }
}
