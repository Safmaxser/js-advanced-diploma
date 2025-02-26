import Vampire from '../characters/Vampire';

test('testing the Vampire class for correct data when instantiating', () => {
  const result = new Vampire(2);  
  const expected = {
    type: 'vampire',
    health: 100,
    level: 2,    
    attack: 33,
    defence: 33,
    numberSteps: 2,
    attackRadius: 2,
  };
  expect(result).toEqual(expected);
});
