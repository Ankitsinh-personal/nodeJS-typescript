import axios, { AxiosPromise, AxiosResponse } from "axios"
// import { UserProps } from "./User";

// replace userProps with <T> => make it generic so any type can proceed

//define interface to know that the generic type has this property
interface HasId{
    id?:number
}
export class ApiSync <T extends HasId >{
    constructor(public rootUrl : string){}

     //AxiosResponse promise
     fetch(id:number) : AxiosPromise{
        return axios.get(`${this.rootUrl}/${id}`)
       
        // this method is implement inside user = return promise
        // .then((response : AxiosResponse): void =>{
        //     this.set(response.data)     // update user  object
        // })
    }

    save(data: T): AxiosPromise{    //(data: UserProps)
        // const id = this.get('id')
        // id => interface HasId ( generic type extends) -> because T has not know that id property
        const { id } = data;    // const id = data.id
        if(id){
            //put
            // id   => type = number -> TS default behaviours
            return axios.put(`${this.rootUrl}/${id}` , data)
        }
        else{
            //post
            // id   => type = number or undefined -> TS default behaviours
            return axios.post(this.rootUrl, data)
        }
    }
}