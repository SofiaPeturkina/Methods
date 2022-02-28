import Undead from '../Undead';

test("should create new character Undead", () => {
    const hero = new Undead("Вампир", "Undead");
    const trueHero = {
        name: "Вампир",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(hero).toEqual(trueHero);
});

test('should up level', () => {
    const result = new Undead("Вампир", "Undead");
    result.health = 50;
    result.level = 1;
    result.levelUp();
    const expected = {
        name: "Вампир",
        type: "Undead",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
  
    expect(result).toEqual(expected);
  });
  
  test('should make damage', () => {
    const result = new Undead("Вампир", "Undead");
    result.health = 50;
    result.damage(3);
    const expected = 47.75;
  
    expect(result.health).toBeCloseTo(expected);
  });