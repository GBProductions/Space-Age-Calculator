import { Age, MercuryAge, VenusAge } from './../src/age.js';


describe('EarthAge', () => {

  test('should return user age in Earth years', () => {
    const age = new Age(50);
    expect(age.userInput).toEqual(50);
  });
});

describe('Mercuryage', () => {
  test ('findAge will take the users age and return it in Mercury years', () => {
    let age = new MercuryAge(100, 0.24);
    expect (age.findAge()).toEqual(24);
  });
});

describe('Venusage', () => {
  test ('findAge will take the users age and return it in Venus years', () => {
    let age = new VenusAge();
    expect (age.findAge()).toEqual();
  });
});