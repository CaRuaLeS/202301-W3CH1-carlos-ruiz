/* eslint-disable no-unused-vars */
import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    public whoServes: Fighter,
    public service: number
  ) {
    super(charName, family, age);
  }

  greetings(): string {
    return super.greetings() + 'Soy un loser';
  }
}
