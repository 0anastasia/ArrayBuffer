import Daemon from '../daemon';

test('новый персонаж Daemon', () => {
  const daemon = new Daemon('qwer');
  const result = {
    name: 'qwer', level: 1, health: 100, _attack: 10, defense: 40, type: 'Daemon', _stoned: false,
  };
  expect(daemon).toEqual(result);
});
