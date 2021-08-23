//type annotations
let apples:number = 5  // === let apples = 5

let speed:string = 'fast'
let hasname: boolean = true
let noitingMuch:null = null
let nothing:undefined = undefined

//built in objects - type annotations
let now: Date = new Date()

//array
let colors: string[] = ['red','green'] 
let mynumbers : number[] = [1,2,3]
let truth:boolean[] = [true, false, true]

//calsses - type annotations
class Car{

}
let car:Car = new Car()

//object literal - type annotations
let points:{x:number ; y :number , z:string} = {       // ; semicolan 
    x : 20,
    y : 23,
    z : "x and y cordinate"
}

//functions type anotations
//after function name -> define return type
let printNumber:(i:number)=> void = (i:number) =>{
    console.log(i);
    
}

//when to use annotations
///-----------------------------------------------------------------------
//  1. function return 'any' type

const json = ' { "x" : 4 , "y" : 5 } ';
const cordinate = JSON.parse(json)  // json return type : any
console.log(cordinate);             // { x : 4 , y: 5 }
// cordinate.sgfhdsfhghj        //this will not show error at development time

// to solve this
const json1 = ' { "x" : 4 , "y" : 5 } ';
const cordinate1:{ x:number ; y: number } = JSON.parse(json1)  // json return type : any
console.log(cordinate);

// cordinate1.dsdfgdfgfd;       //this will show an error at development time

// 2.decalre variable in one line -> after that initialization

let words = ['red','green']
let foundword: boolean;
for (let i=0 ;i< words.length ; i++){
    if(words[i] === 'red'){
        foundword = true            // foundword : any  => so that we define type annotation to see better output   => let foundword: boolean;
    }
}

//3. variable whose type cannot be inferred by correctly
// dis advantages of type inferences

let numbers = [-1,2,-3]
let aboveZero: boolean | number = false;

for (let i=0 ;i< numbers.length ; i++){
    if(numbers[i] > 0){
        aboveZero = numbers[i]      // give error -> because already defined with boolean type => solution => aboveZero: boolean | number        
    }
}