import { characterGenerator, generateTeam } from "../generators";
import Bowman from "../characters/Bowman";
import Swordsman from "../characters/Swordsman";
import Magician from "../characters/Magician";
import Daemon from "../characters/Daemon";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";

test('testing the generators module function generator characterGenerator for the correctness of creating a character with one of these types', () => {
  expect.assertions(10);
  const allowedTypes = [Bowman, Swordsman, Magician, Daemon, Undead, Vampire];
  const playerGenerator = characterGenerator(allowedTypes, 1);
  console.log(playerGenerator.next().value.constructor);
  for (let index = 0; index < 10; index++) {
    expect(allowedTypes.includes(playerGenerator.next().value.constructor)).toBeTruthy();    
  }  
});

test('testing the generator module generator function generateTeam for the correctness of creating a group of characters with a level in the required range', () => {
  expect.assertions(10);
  const allowedTypes = [Bowman, Swordsman, Magician];
  const maxLevel = 5;
  const team = generateTeam(allowedTypes, maxLevel, 10);
  team.characters.forEach(character => {
    expect(character.level >= 1 && character.level <= maxLevel).toBeTruthy();   
  });
});
