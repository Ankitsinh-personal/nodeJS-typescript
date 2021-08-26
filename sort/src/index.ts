import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10,5,-2,7,0,-8])
console.log("before sorting:",numbersCollection.data);

const sorterNumber = new Sorter(numbersCollection);
sorterNumber.sort();

// console.log(sorter.collection.data)
console.log("after sorting:",numbersCollection.data);

const charactersCollection = new CharactersCollection('Ankit')
console.log("before sorting:",charactersCollection.data);

const sorterstring = new Sorter(charactersCollection);
sorterstring.sort();

// console.log(sorter.collection.data)
console.log("after sorting:",charactersCollection.data);
