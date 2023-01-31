import { Fighter } from './fighter';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const fighter = new Fighter('Pepe', 'Fernandez', 23, 'Martillo', 5);
    test('Then it values should be filled', () => {
      expect(fighter).toHaveProperty('weapon');
      expect(fighter).toHaveProperty('dexterity');
    });
    test('Then if you call the die function', () => {
      fighter.die();
      expect(fighter.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(fighter.greetings()).toBe(
        'Pepe de la familia Fernandez: Primero pego y luego pregunto'
      );
    });
  });
});
