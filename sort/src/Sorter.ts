interface Sortable{

    len : number;
    compare(leftIndex: number , rightIndex:number) : boolean;
    swap(leftIndex: number , rightIndex:number): void;
}
export class Sorter{
    constructor( public collection: Sortable ){}

    sort():void{
        const { len } = this.collection   
        for(let i=0; i<len;i++){
            for(let j=0;j<len-i-1;j++){    
                
                if(this.collection.compare(j, j+1)){
                    this.collection.swap(j,j+1)
                }
            }
        }
    }
}







//===================================

class Sorter1{

    // collection:number[] | string;
    // constructor(collection:number[] | string){
    //     this.collection = collection
    // }

    //above code and this code both are same
    constructor( public collection: number[] | string ){}
    
    sort():void{
        //write here actul logic
        const len = this.collection.length   // or  const { len } = this.collection.length
        for(let i=0; i<len;i++){
            for(let j=0;j<len-i-1;j++){     // last element is at correct position
                
                // this.collection is arrary
                if(this.collection instanceof Array){
                    if( this.collection[j] > this.collection[j+1] ){
                        //swap
                        const leftHand = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = leftHand
                    }
                }

                // this.collection is string
                if(typeof this.collection === 'string'){

                }
            }
        }
    }
}

const sorter = new Sorter1([10,3,0,-2]);
sorter.sort();

// console.log(sorter.collection)