import { Space, Age, MercuryAge, VenusAge, MarsAge, JupiterAge, MercuryLifeExpect } from './../src/age.js';

describe('Space', () => {
  test('Space', () => {
    const age = new Space(1, 0.24, 0.62, 1.88, 11.86);
    expect(age.earth).toEqual(1);
    expect(age.mercury).toEqual(0.24);
    expect(age.venus).toEqual(0.62);
    expect(age.mars).toEqual(1.88);
    expect(age.jupiter).toEqual(11.86);
  });
});




describe('Age', () => {
  test('should return user age in Earth years', () => {
    const age = new Age(50);
    expect(age.userInput).toEqual(50);
  });
});

describe('MercuryAge', () => {
  test ('findAge will take the users age and return it in Mercury years', () => {
    let age = new MercuryAge(100, 0.24);
    expect (age.findAge()).toEqual(24);
  });
});

describe('VenusAge', () => {
  test ('findAge will take the users age and return it in Venus years', () => {
    let age = new VenusAge(100, 0.62);
    expect (age.findAge()).toEqual(62);
  });
});

describe('MarsAge', () => {
  test ('findAge will take the users age and return it in Mars years', () => {
    let age = new MarsAge(100, 1.88);
    expect (age.findAge()).toEqual(188);
  });
});


describe('JupiterAge', () => {
  test ('findAge will take the users age and return it in Mars years', () => {
    let age = new JupiterAge(100, 11.86);
    expect (age.findAge()).toEqual(1186);
  });
});


//------------------------------------------------------------------------------------


describe('MercuryLifeExpect', () => {
  test ('findYearsLater will take the user Life Expectancy and minus their age', () => {
    let age = new MercuryLifeExpect(100, 0.24, 200);
    expect (age.findYearsLeft()).toEqual(24);
  });
});
