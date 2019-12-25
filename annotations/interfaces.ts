const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle_1 = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle_1(oldCivic);

//when we create an interface what we're doing is we're creating a type
// in order to have a type of Vehicle you need to have the properties -> name, year, broken
//and they need to be a string, number, and boolean
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

//using an interface this function looks a lot cleaner
const printVehicle = (vehicle: Vehicle): void => {
  const { name, year, broken } = vehicle;
  console.log(`Name:${name}`);
  console.log(`year:${year}`);
  console.log(`broken:${broken}`);
};

//this is a new car
const newAccord = {
  name: 'accord',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

//this interface expects the variable to contain a function of name summary that returns a string
//we can express a function inside of an interface
interface NewVehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

newAccord as NewVehicle;

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  }
};

//you can think of this interface as a gate keeper that will only be satisfied by  certain objects that contain a
//function of name summary that returns a string
interface reportable {
  summary(): string;
}

const report = (item: reportable): void => {
  console.log(item.summary());
};

report(drinks);
report(newAccord);

//general strategy for reusable code in TS
//1- create functions that accept arguments that are typed with interfaces (report)
//2- object/classes can decide to 'implement' a given interface to work with a function

//to work with report you have to satisfy the type reportable which acts as a gatekeeper
