import Character from "../Character";

export default class Daemon extends Character {  
  constructor(level) {
    super('daemon'); 
    this.attack = 10;
    this.defence = 10; 
    this.numberSteps = 1;
    this.attackRadius = 4;
    super.levelUp(level);
  }
}
