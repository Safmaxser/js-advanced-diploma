import Character from "../Character";

export default class Magician extends Character {  
  constructor(level) {
    super('magician');  
    this.attack = 10;
    this.defence = 40;
    this.numberSteps = 1;
    this.attackRadius = 4;
    super.levelUp(level);
  }
}
