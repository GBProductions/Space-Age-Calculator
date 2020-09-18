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

}

/*
export class Age {
  constructor (userInput, planetYears, mercury, venus, mars, jupiter) {
    this.userInput = userInput;
    this.planetYears = planetYears
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }
  calculate () {
    if (planetYears = "Mercury") {
      return (userInput * 0.24)
    } else if (planetYears = "Venus") {
      return (userInput * 0.62)
    } else if (planetYears = "Mars") {
      return (userInput * 1.88)
    } else if (planetYears = "Jupiter") {
      return (userInput * 11.86)
    }
  }
}


export class MercuryAge {
  constructor (userInput, planetAge){
    this.userInput = userInput;
    this.planetAge = planetAge;
  }
  findAge(){
    return (this.userInput * this.planetAge)
  }
}

export class VenusAge {
  constructor (userInput, planetAge){
    this.userInput = userInput;
    this.planetAge = planetAge;
  }
  findAge(){
    return (this.userInput * this.planetAge)
  }
}

export class MarsAge {
  constructor (userInput, planetAge){
    this.userInput = userInput;
    this.planetAge = planetAge;
  }
  findAge(){
    return (this.userInput * this.planetAge)
  }
}

export class JupiterAge {
  constructor (userInput, planetAge){
    this.userInput = userInput;
    this.planetAge = planetAge;
  }
  findAge(){
    return (this.userInput * this.planetAge)
  }
}




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