import Bowman from "../characters/Bowman";

test('testing the Bowman class for correct data when instantiating', () => {
  const result = new Bowman(2);  
  const expected = {
    type: 'bowman',
    health: 100,
    level: 2,    
    attack: 33,
    defence: 33,
    numberSteps: 2,
    attackRadius: 2,
  };
  expect(result).toEqual(expected);
});
