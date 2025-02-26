import Character from "../Character";

export default class Vampire extends Character {  
  constructor(level) {
    super('vampire');  
    this.attack = 25;
    this.defence = 25;
    this.numberSteps = 2;
    this.attackRadius = 2;
    super.levelUp(level);
  }
}
