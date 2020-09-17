import { Age, Mercuryage, Venusage } from './../src/age.js';


describe('EarthAge', () => {

  test('should return user age in Earth years', () => {
    const age = new Age(50);
    expect(age.userInput).toEqual(50);
  });
});

describe('Mercuryage', () => {
  test ('findAge will take the users age and return it in Mercury years', () => {
    let age = new Mercuryage(100, 0.24);
    expect (age.findAge()).toEqual(24);
  });
});

describe('Venusage', () => {
  test ('findAge will take the users age and return it in Venus years', () => {
    let age = new Venusage(100, 0.62);
    expect (age.findAge()).toEqual(62);
  });
});