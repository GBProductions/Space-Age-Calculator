export class Age {
  constructor (earth) {
    this.earth = earth;
  }
    mercuryAge() {
      this.mercury = this.earth * 0.24
    }
    venusAge() {
      this.venus = this.earth * 0.62
    }
    marsAge() {
      this.mars = this.earth * 1.88
    }
    jupiterAge() {
      this.jupiter = this.earth * 11.86
    }
    mercuryLifeExpectancy() {
      this.mercurylife = (this.earthLifeExpectancy * 0.24) - (this.earth * 0.24)
    
    }
}

/*



export class MercuryLifeExpect {
  constructor (userInput, planetAge, lifeExpectancy) {
    this.userInput = userInput;
    this.planetAge = planetAge;
    this.lifeExpectancy = lifeExpectancy;
  }
  findYearsLeft(){
    return ((this.lifeExpectancy * this.planetAge)
    - (this.userInput * this.planetAge))
  }
}
*/