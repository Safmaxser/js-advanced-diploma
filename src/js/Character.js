/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(type = 'generic') {
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    this.numberSteps = 1;
    this.attackRadius = 1;
    if (new.target === Character) {
      throw new Error('You cannot create a Character object directly!');
    }
  }

  levelUp(increase = 2) {
    for (let i = 1; i < increase; i++) {
      this.level += 1;
      this.attack = Math.max(this.attack, Math.round(this.attack * (80 + this.health) / 100));
      this.defence = Math.max(this.defence, Math.round(this.defence * (80 + this.health) / 100));
      this.health = Math.min(100, Math.round(this.health + 80));      
    }    
  }
}
