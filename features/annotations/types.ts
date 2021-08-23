const today = new Date()
console.log(today.getDate());

const person = {
    age : 22,
    name: "ankitsinh"
}
console.log(person);
console.log(person.name);



class Color {
    redback: any
    cast :any
    constructor(bg: string, cast:any){
        this.redback = bg     
        this.cast = cast
        return this.redback , this.cast  
    }
}
const cast = "Darbar"

var red = new Color('red background',cast)
console.log(red.cast);
console.log(red.redback);

