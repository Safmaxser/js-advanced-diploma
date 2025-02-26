import Swordsman from '../characters/Swordsman';

test('testing the Swordsman class for correct data when instantiating', () => {
  const result = new Swordsman(4);  
  const expected = {
    type: 'swordsman',
    health: 100,
    level: 4,    
    attack: 169,
    defence: 41,
    numberSteps: 4,
    attackRadius: 1,
  };
  expect(result).toEqual(expected);
});
