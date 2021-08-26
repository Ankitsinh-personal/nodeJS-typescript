export class CharactersCollection{

    // data: number[];
    // constructor(data:number[]){
    //     this.data = data
    // }

    constructor( public data: string){}

    get  len():number{
        return this.data.length
    }
    compare(leftIndex: number , rightIndex:number) : boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex: number , rightIndex:number): void{
        const characters = this.data.split('');
        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join('');
    }
}