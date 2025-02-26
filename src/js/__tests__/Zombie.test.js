import Zombie from '../characters/Zombie';

test('testing the Zombie class for correct data when instantiating', () => {
  const result = new Zombie(1);  
  const expected = {
    type: 'zombie',
    health: 50,
    level: 1,    
    attack: 50,
    defence: 10,
    numberSteps: 2,
    attackRadius: 1,
  };
  expect(result).toEqual(expected);
});
