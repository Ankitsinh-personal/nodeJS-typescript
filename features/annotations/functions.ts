const add = (a:number , b:number) : number => {
        return a+b;
}

const subtract = (a:number , b:number)  => {
    return a - b;
}

//anonymous function
function divide(a:number ,b:number):number{
    return a/b;
}

const multiply = function(a:number ,b:number):number{
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}


const todayWeather = {
    date :new Date(),
    weather : 'sunny'
}   

//distructuring with annoatations
//const logWeather = ({ date , weather} : { date: Date , weather:string } ): void => {
// console.log(date, weather);

const logWeather = (forecast : { date: Date , weather:string } ): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
    console.log(forecast);
    
}

logWeather(todayWeather)