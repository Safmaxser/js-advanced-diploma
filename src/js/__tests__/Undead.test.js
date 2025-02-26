import Undead from '../characters/Undead';

test('testing the Undead class for correct data when instantiating', () => {
  const result = new Undead(1);  
  const expected = {
    type: 'undead',
    health: 50,
    level: 1,    
    attack: 40,
    defence: 10,
    numberSteps: 4,
    attackRadius: 1,
  };
  expect(result).toEqual(expected);
});
