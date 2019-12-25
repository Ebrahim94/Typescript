let apples: number = 5;
//this tells typescript that we are only going to assign a value of type number to the apples
//variable

//type annotation can be used with different variables
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//this means that the colors variable can be assigned an array where all the elements are of type
//string
let colors: string[] = ['red', 'green', 'blue'];

//type annotation for numbers in a list
let myNumbers: number[] = [1, 2, 3];

//type annotation for a list that only accepts elements that have a type of boolean i.e. ...
//all the properties that a boolean has
let truths: boolean[] = [true, true, false];

//creating a class of car
class Car {}

//this car has a type of class Car
// i.e. it has all the properties that an instance of the Car class has
let car: Car = new Car();

//Object literal containing two key value pairs that are both numbers
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function that takes in one variable and returns nothing
// before the arrow indicates what the function accepts as parameter after the arrow is
//what the function outputs
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
//type inference only figures out what type of value a function will return but not what
//the input is

//when to use annotations instead of relying on type inference
//1- Function that returns the 'any' type
const json = '{"x": 10, "y":20}';
const coordinates_1 = JSON.parse(json); //this has a type of any because the type of the output is dependent on the type of the input

const coordinates: { x: number; y: number } = JSON.parse(json); //using type annotation we can say what the type of coordinates should be
// note these coordinates are only for a cartisian plane the real world has three coordinates lol

//2- when we declar a variable on one line and initalize it later
//here type inference already sets the variable word to the type of string[]
let words = ['red', 'green', 'blue'];

let foundWord_1; //this variable will have type of any because it is being decalred but it is not being initalized

let foundWord: boolean; //if the user would like to declare the variable without initalizing it
// they can add their own type

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // found word is of type true
  }
}

//3- variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

//this can be both a boolean or a number
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
