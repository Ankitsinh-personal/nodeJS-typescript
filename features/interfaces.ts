interface vehical{
    name:string ,
    year: number , 
    broken: boolean,
    summary() : string,
}

const oldCivik = {
    name:'civik',
    year : 2000,
    broken : true,
    summary(): string { 
        return 'summary data'
    }
}

// const printVehical = ( vehical:{ name:string , year: number , broken: boolean } ) : void => {
const printVehical = ( vehical:vehical ) : void => {  // vehical interface
    console.log(vehical.summary());

    console.log(vehical.name);
}

printVehical(oldCivik)




//common interface => resuable code
interface summaryInterface{
    summary() : string,
}

const data1 = {
    name:'civik',
    year : 2000,
    broken : true,
    summary(): string { 
        return 'summary data1'
    }
}

const data2 = {
    name:'hero no 1',
    summary(): string { 
        return 'summary data2'
    }
}

const printSummary = ( summaryData:summaryInterface ) : void => {  // vehical interface
    console.log(summaryData.summary());
}

printSummary(data1)
printSummary(data2)