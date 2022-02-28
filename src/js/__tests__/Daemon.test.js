import Daemon from '../Daemon';

test("should create new character Daemon", () => {
    const hero = new Daemon("Демон", "Daemon");
    const trueHero = {
        name: "Демон",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(hero).toEqual(trueHero);
});

test("should up level", () => {
    const result = new Daemon("Демон", "Daemon");
    result.health = 60;
    result.level = 1;
    result.levelUp();
    const expected = {
        name: "Демон",
        type: "Daemon",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    };
  
    expect(result).toEqual(expected);
  });
  
  test("should make damage", () => {
    const result = new Daemon("Демон", "Daemon");
    result.health = 60;
    result.damage(3);
    const expected = 58.2;
  
    expect(result.health).toBeCloseTo(expected);
  });