import { Fighter } from './fighter';
import { Squire } from './squire';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const fighter = new Fighter('Pepe', 'Fernandez', 23, 'Martillo', 5);
    const squire = new Squire('Pepe', 'Fernandez', 23, fighter);
    test('Then it values should be filled', () => {
      expect(squire).toHaveProperty('whoServes');
    });
    test('Then if you call the die function', () => {
      squire.die();
      expect(squire.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(squire.greetings()).toBe(
        'Pepe de la familia Fernandez: Soy un loser'
      );
    });
  });
});
