//classes are a blueprint to create an object with some fields(values) and methods to represent a thing

//this is how classes work in JS
class VehicleJs {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new VehicleJs();

class CarsJs extends VehicleJs {
  drive(): void {
    console.log('vroom');
  }
}

const newcar = new CarsJs();

// in TS we have modifiers
//public -> This method can be called anywhere at anytime
//private -> This method can only be called by other methods in this class
//protected -> This method can be called by other methods in this class, or by other methods in child class

//modifiers can be used on properties or fields as well
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('peep');
  }
}

const vehicle_ = new Vehicle('orange');
console.log(vehicle_.color);

// if you change a method that exists in the parent class you cannot change the modifier in the child class
class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    // the color variable was not given a modifier because it
    //was already declared in the parent class and we want it to belong to the parent class
    super(color);
  }
  private drive() {
    console.log('vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const accord = new Cars(4, 'red');
accord.startDriving();
