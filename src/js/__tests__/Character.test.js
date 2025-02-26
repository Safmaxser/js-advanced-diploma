import Character from "../Character";

test('testing the Character class for throwing an error when created via new Character', () => {
  expect(() => new Character(1)).toThrow(Error('You cannot create a Character object directly!'));
});
