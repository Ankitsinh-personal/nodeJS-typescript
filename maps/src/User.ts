import faker from 'faker'

export const red = 'red'

export default 'this is without  { }  at import time';

export class User {
    name: string;
    location : {
        lat: number
        lng:number
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
        
    }
}