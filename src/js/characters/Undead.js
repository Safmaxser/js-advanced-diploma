import Character from "../Character";

export default class Undead extends Character {  
  constructor(level) {
    super('undead');  
    this.attack = 40;
    this.defence = 10;
    this.numberSteps = 4;
    this.attackRadius = 1;
    super.levelUp(level);
  }
}
