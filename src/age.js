export class Age {
  constructor (earth, earthLifeExpectancy) {
    this.earth = earth;
    this.earthLifeExpectancy = earthLifeExpectancy;
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
    venusLifeExpectancy() {
      this.venuslife = (this.earthLifeExpectancy * 0.62) - (this.earth * 0.62)
    }
    marsLifeExpectancy() {
      this.marslife = (this.earthLifeExpectancy * 1.88) - (this.earth * 1.88)
    }
    jupiterLifeExpectancy() {
      this.jupiterlife = (this.earthLifeExpectancy * 11.86) - (this.earth * 11.86)
    }

}
