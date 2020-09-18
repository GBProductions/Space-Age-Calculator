import { Age } from './../src/age.js';

describe('Age', () => {
  test('should return every planets year equivalent in Earth years', () => {
    const age = new Age();
    expect(age.earth).toEqual();
  })

  test('should take user age in Earth years and return in Mercury years', () => {
    const age = new Age(100);
    age.mercuryAge()
    expect(age.mercury).toEqual(24);
  })

  test('should take user age in Earth years and return in Venus years', () => {
    const age = new Age(100);
    age.venusAge()
    expect(age.venus).toEqual(62);
  })

  test('should take user age in Earth years and return in Mars years', () => {
    const age = new Age(100);
    age.marsAge()
    expect(age.mars).toEqual();
  })

  test('should take user age in Earth years and return in Jupiter years', () => {
    const age = new Age(100);
    age.jupiterAge()
    expect(age.jupiter).toEqual();
  })



});

/*

describe('MercuryLifeExpect', () => {
  test ('findYearsLater will take the user Life Expectancy and minus their age', () => {
    let age = new MercuryLifeExpect(100, 0.24, 200);
    expect (age.findYearsLeft()).toEqual(24);
  });
});

*/