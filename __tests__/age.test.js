import Age from './../src/age.js';

describe('Age', () => {

  test('should return user age in Earth years', () => {
    const age = new Age(50);
    expect(age.earthInput).toEqual(50);
  });
});

