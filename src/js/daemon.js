import Character0 from './character0';

export default class Daemon extends Character0 {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defense = 40;
  }
}
