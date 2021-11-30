module.exports = class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    console.log("car created");
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
};
