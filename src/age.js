export class Age {
  constructor (userInput, planetYears) {
    this.userInput = userInput;
    this.planetYears = planetYears
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
/*
  calculate() {
    if (planetYears = Mercury) {
      return "old"
    } else if (planetYears = Venus) {
      return "older"
    } else if (planetYears = Mars) {
      return "oldest"
    } else if (planetYears = Jupiter) {
      return "oldy oldy"
    }
  }
*/