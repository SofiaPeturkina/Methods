import Zombie from '../Zombie';

test("should create new character Zombie", () => {
    const hero = new Zombie("Зомби", "Zombie");
    const trueHero = {
        name: "Зомби",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(hero).toEqual(trueHero);
});

test("should up level", () => {
    const result = new Zombie("Зомби", "Zombie");
    result.health = 20;
    result.level = 1;
    result.levelUp();
    const expected = {
        name: "Зомби",
        type: "Zombie",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    };
  
    expect(result).toEqual(expected);
  });
  
  test("should make damage", () => {
    const result = new Zombie("Зомби", "Zombie");
    result.health = 20;
    result.damage(3);
    const expected = 17.3;
  
    expect(result.health).toBeCloseTo(expected);
  });