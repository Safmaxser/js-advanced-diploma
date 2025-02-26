import Character from "../Character";

export default class Bowman extends Character {  
  constructor(level) {
    super('bowman');  
    this.attack = 25;
    this.defence = 25;
    this.numberSteps = 2;
    this.attackRadius = 2;
    super.levelUp(level);
  }
}
