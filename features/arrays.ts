const cars = ['ford','maruti']
const dtaes = [new Date() , new Date()]

// const array1: string [][] = []
const array1 = [
    ['data1'],
    ['data2']
] 

//help with inferences to etracting the value

// const car = cars[0];
const mycar = cars.pop()

//prevent incompetabile value
// cars.push(1000);  // only string

//get help with map , foreach , reduce functions

//map -> call eenry element in array 
cars.map((car:string) : string => {           // each car is string
    return car.toUpperCase();
})

//flexible types

const date1 = [ new Date() , '2020-12-12']  // type string and date
// date1.push(100);  // error -> not string not date