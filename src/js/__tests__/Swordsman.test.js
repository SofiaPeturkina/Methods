import Swordsman from '../Swordsman';

test("should create new character Swordsman", () => {
    const hero = new Swordsman("Мечник", "Swordsman");
    const trueHero = {
        name: "Мечник",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(hero).toEqual(trueHero);
});

test("should up level", () => {
    const result = new Swordsman("Мечник", "Swordsman");
    result.health = 80;
    result.level = 2;
    result.levelUp();
    const expected = {
        name: "Мечник",
        type: "Swordsman",
        health: 100,
        level: 3,
        attack: 48,
        defence: 12,
    };
  
    expect(result).toEqual(expected);
  });
  
  test("should make damage", () => {
    const result = new Swordsman("Мечник", "Swordsman");
    result.health = 80;
    result.damage(3);
    const expected = 77.3;
  
    expect(result.health).toBeCloseTo(expected);
  });