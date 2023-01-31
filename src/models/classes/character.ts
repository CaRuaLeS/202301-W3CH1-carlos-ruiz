/* eslint-disable no-unused-vars */
export class Character {
  public isAlive: boolean;
  constructor(
    public charName: string,
    public family: string,
    public age: number
  ) {
    this.isAlive = true;
  }

  die() {
    this.isAlive = false;
  }

  greetings(): string {
    return `${this.charName} de la familia ${this.family}: `;
  }
}
