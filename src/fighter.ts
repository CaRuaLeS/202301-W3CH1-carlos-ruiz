import { Character } from './character';

export class Fighter extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    isAlive: boolean,
    public weapon: string,
    public dexterity: number
  ) {
    super(charName, family, age, isAlive);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }

  greetings(): string {
    return super.greetings() + 'Primero pego y luego pregunto';
  }
}
