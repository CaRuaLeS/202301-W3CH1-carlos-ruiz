import { King } from './king';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const king = new King('Pepe', 'Fernandez', 23, 5);
    test('Then it values should be filled', () => {
      expect(king).toHaveProperty('kingdomYears');
    });
    test('Then if you call the die function', () => {
      king.die();
      expect(king.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(king.greetings()).toBe(
        'Pepe de la familia Fernandez: Vais a morir todos'
      );
    });
  });
});
