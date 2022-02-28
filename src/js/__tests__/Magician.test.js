import Magician from '../Magician';

test("should create new character Magician", () => {
    const hero = new Magician("Маг", "Magician");
    const trueHero = {
        name: "Маг",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(hero).toEqual(trueHero);
});

test("should up level", () => {
    const result = new Magician("Маг", "Magician");
    result.health = 100;
    result.level = 5;
    result.levelUp();
    const expected = {
        name: "Маг",
        type: "Magician",
        health: 100,
        level: 6,
        attack: 12,
        defence: 48,
    };
    expect(result).toEqual(expected);
  });
  
  test("should make damage", () => {
    const result = new Magician("Маг", "Magician");
    result.health = 100;
    result.damage(3);
    const expected = 98.2;
  
    expect(result.health).toBeCloseTo(expected);
  });