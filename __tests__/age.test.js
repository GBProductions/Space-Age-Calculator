import { describe } from 'yargs';
import Age from './../src/age.js';

describe('Age', () => {

  test('should return users age in Earth years', () => {
    const age = new Age(50);
    expect(age.earthInput).toEqual(50);
    });
  });
  

describe('mercuryAge', () => {

  test('should return users Earth age in Mercury years', () => {
  const age = new mercuryAge();
  expect(age.earthInput).toEqual();
  expect(age.mercuryAge).toEqual();
  });
});