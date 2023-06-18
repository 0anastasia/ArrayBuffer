import Character0 from '../character0';
import Daemon from '../daemon';
import Magician from '../magician';

test('новый персонаж Character0', () => {
  const character0 = new Character0('qwer');
  const result = {
    name: 'qwe', level: 1, health: 100, _stoned: false,
  };
  expect(character0).toEqual(result);
});

test('Magician атакует 2 клетку без дурмана', () => {
  const magician = new Magician('qwer');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(90);
});
test('Magician атакует 2 клетку с дурманом', () => {
  const magician = new Magician('qwer');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
});

test('Daemon атакует 6 клетку без дурмана', () => {
  const daemon = new Daemon('qwer');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});
test('Daemon атакует 2 клетку с дурманом', () => {
  const daemon = new Daemon('qwer');
  daemon.stoned = true;
  daemon.distance = 2;
  const result = daemon.attack;
  expect(result).toBe(4);
});
