import Age from './../src/age.js';

describe('Age', () => {

  test('should return users age in Earth years', () => {
    const earthInput = new Age(50);
    expect(this.earthInput).toEqual(50);
    });
  })   