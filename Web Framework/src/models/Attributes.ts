export class Attributes<T>{
    constructor(private data : T){}

    get = <K extends keyof T > (key:K):T[K] => {       // object is generic and its property is also make generic
        return this.data[key]               
    }

    set(update:T):void{
        // Object.assign(old , new) // replace with new value
        Object.assign(this.data , update)
    }  

    getAll(): T {
        return this.data
    }
}