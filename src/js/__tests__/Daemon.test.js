import Daemon from '../characters/Daemon';

test('testing the Daemon class for correct data when instantiating', () => {
  const result = new Daemon(1);  
  const expected = {
    type: 'daemon',
    health: 50,
    level: 1,    
    attack: 10,
    defence: 10,
    numberSteps: 1,
    attackRadius: 4,
  };
  expect(result).toEqual(expected);
});
