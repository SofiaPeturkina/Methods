import Character from '../Character';

test("name shouldn't contain less than 2 symbols", () => {
    expect(() => new Character("G", "Magician")).toThrow(new Error("Ошибка! Имя персонажа должно быть от 2 до 10 символов!"));
});

test("name shouldn't contain more than 10 symbols", () => {
    expect(() => new Character("Peterhnfinfidsfcv", "Magician")).toThrow(new Error("Ошибка! Имя персонажа должно быть от 2 до 10 символов!"));
});

test("invalid type", () => {
    expect(() => new Character("Evgenia", "Magic")).toThrow(new Error("Ошибка! Неверный тип персонажа!"));
});

test("you can't up level if character is dead", () => {
    const result = new Character("Лучник", "Bowman");
    result.health = 0;
    expect(() => result.levelUp()).toThrow(new Error("Ошибка! Персонаж умер!"));
});

test("you can't damage character if he is already dead", () => {
    const result = new Character("Лучник", "Bowman");
    result.health = -10;
    expect(() => result.damage(3)).toThrow(new Error("Ошибка! Персонаж уже умер!"));
});
