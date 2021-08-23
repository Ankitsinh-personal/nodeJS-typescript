class Vehicle{

    // color : string
    // constructor ( color: string){
    //     this.color = color;
    // }

    constructor( public color: string){}  // nabove code and this both same
    

    drive(): void{
        console.log('first drive');
    }
    honk():void{
        console.log('beep');
        
    }
}

class Car extends Vehicle{
  
    //define here  or pass argument in create ne object
    constructor(color:string){
        super(color)
    }
    //method overwite
    drive(): void{
        console.log('second drive');
    }
}

class Newcar{
    //not accessable outside from the class
    private drive(): void{
        console.log('second drive in private');
    }

    //make it callable
    driveCall():void{
        this.drive()
    }


}
const vehicle = new Vehicle('Orange')
console.log(vehicle.color);
vehicle.drive()

const car = new Car('blue')
// const car = new Car()   // not pass argt bcs call super() inside constructure() , without argument
console.log( car.color );
car.honk()

const newcar = new Newcar()
// newcar.drive()  // error , not called from outside the class
newcar.driveCall()