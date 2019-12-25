//carMakers is an array that accepts elements of type String
const carMakers = ['ford', 'toyota', 'chevy'];

//dates is an array that accepts elements of type Date
const dates = [new Date(), new Date()];

//two dimensonal arrays : an array that contains an array of string
const carsByMake = [['f150'], ['corolla'], ['camaro']];

//type annotation helps with inference when extracting values
//cars will be a list that contains strings
const cars = carsByMake[0];

carMakers.map((car: string): string => {
  return car;
});

//flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('string');
importantDates.push(new Date());

//we cannot push a number
//importantDates.push(1) <--- not possible
