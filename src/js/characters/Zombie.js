import Character from "../Character";

export default class Zombie extends Character {  
  constructor(level) {
    super('zombie');  
    this.attack = 50;
    this.defence = 10;
    this.numberSteps = 2;
    this.attackRadius = 1;
    super.levelUp(level);
  }
}
