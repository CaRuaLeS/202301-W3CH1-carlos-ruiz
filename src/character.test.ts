import { Character } from './character';

describe('Given the character class', () => {
  describe('When you create a new character', () => {
    const char = new Character('Pepe', 'Fernandez', 23);
    test('Then it values should be filled', () => {
      expect(char).toHaveProperty('charName');
      expect(char).toHaveProperty('family');
      expect(char).toHaveProperty('age');
      expect(char).toHaveProperty('isAlive');
    });
    test('Then if you call the die function', () => {
      char.die();
      expect(char.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(char.greetings()).toBe(`Pepe de la familia Fernandez: `);
    });
  });
});
