import Magician from '../magician';

test('новый персонаж Magician', () => {
  const magician = new Magician('qwer');
  const result = {
    name: 'qwer', level: 1, health: 100, _attack: 100, defense: 40, type: 'Magician', _stoned: false,
  };
  expect(magician).toEqual(result);
});
