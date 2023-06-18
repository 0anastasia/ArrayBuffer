import Character from '../character';

test('новый персонаж Character', () => {
  const character = new Character('qwer');
  const result = {
    name: 'qwer', level: 1, health: 100,
  };
  expect(character).toEqual(result);
});
