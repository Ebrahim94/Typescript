const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//we are defining a new name for a type this is not equivilant to an interface
type Drink = [string, boolean, number];

//this is how to turn an array into a tuple using typescript
const pepsi: [string, boolean, number] = ['brown', true, 40];

//the variable coke is of type "Drink" that we declared above
const coke: Drink = ['brown', true, 50];
