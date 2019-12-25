const add = (a: number, b: number): number => {
  return a + b;
};

//type being assiged to an arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

//type to a name variable
function divide(a: number, b: number): number {
  return a / b;
}

//type to anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// only declare that the function will retrun 'never' when we do not expect it to return anything
//the below will not return undefined instead it will throw an error
const throwError_1 = (message: string): never => {
  throw new Error(message);
};

//the function below should return a type of string but if it does not and throws an error (never)
//we can still use the expected output will declaring the type annotation
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const today = {
  date: new Date(),
  weather: 'sunny'
};

// below we are using destructuring where the variables are removed from the object {} and then the type
// is set after the : {}
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date);
  console.log(weather);
};
