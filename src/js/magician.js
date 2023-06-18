import Character0 from './character0';

export default class Magician extends Character0 {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 100;
    this.defense = 40;
  }
}
