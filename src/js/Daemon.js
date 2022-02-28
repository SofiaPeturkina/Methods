import Character from './Character';

export default class Daemon extends Character {
    constructor(name, type) {
        super(name, type = "Daemon");
        this.attack = 10;
        this.defence = 40;
    }
}