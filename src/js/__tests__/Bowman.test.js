import Bowman from '../Bowman';

test("should create new character Bowman", () => {
    const hero = new Bowman("Лучник", "Bowman");
    const trueHero = {
        name: "Лучник",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(hero).toEqual(trueHero);
});

test("should up level", () => {
    const result = new Bowman("Лучник", "Bowman");
    result.health = 80;
    result.level = 3;
    result.levelUp();
    const expected = {
        name: "Лучник",
        type: "Bowman",
        health: 100,
        level: 4,
        attack: 30,
        defence: 30,
    };
  
    expect(result).toEqual(expected);
  });
  
  test("should make damage", () => {
    const result = new Bowman("Лучник", "Bowman");
    result.health = 80;
    result.damage(3);
    const expected = 77.75;
  
    expect(result.health).toBeCloseTo(expected);
  });