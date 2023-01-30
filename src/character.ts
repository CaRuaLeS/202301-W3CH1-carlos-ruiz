export class Character {
  constructor(
    public charName: string,
    public family: string,
    public age: number,
    public isAlive: boolean
  ) {
    this.charName = charName;
    this.family = family;
    this.age = age;
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  greetings(): string {
    return `${this.charName} de la familia ${this.family}: `;
  }
}
