export class Age {
  constructor (userInput, planetYears) {
    this.userInput = userInput;
    this.planetYears = planetYears
  }
}

export class Mercuryage {
  constructor (earthInput, planetAge){
  this.earthInput = earthInput;
  this.planetAge = planetAge;
}
  findAge(){
    return (this.earthInput * this.planetAge)
  }
}




/*
let Mercury = 0.24
let Venus = 0.62
let Mars = 1.88
let Jupiter = 11.86

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

/*
export class Mercuryage {
  constructor (earthInput, planetAge){
  this.earthInput = earthInput;
  this.planetAge = planetAge;
}
  findAge(){
    return (this.earthInput * this.planetAge)
  }
}*/