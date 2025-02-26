import Magician from '../characters/Magician';

test('testing the Magician class for correct data when instantiating', () => {
  const result = new Magician(3);  
  const expected = {
    type: 'magician',
    health: 100,
    level: 3,    
    attack: 23,
    defence: 94,
    numberSteps: 1,
    attackRadius: 4,
  };
  expect(result).toEqual(expected);
});
