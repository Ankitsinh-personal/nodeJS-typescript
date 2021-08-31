// import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
// import { UserEdit } from "./views/UserEdit";
// import { UserForm } from "./views/UserForm";
import { UserList } from "./views/UserList";

// const user = new User({name:'Darsh',age:2})
// user.events.on('change',()=>{
//     console.log('chnage event !!');
// })

// user.events.trigger('change')

// const user = new User({ id : 1})

// user.fetch()  // update
// user.set({name:"ankitsinh",age:22})

// user.save()         // if provide id = put else post (  direct object)

// console.log(user.get('id')); // current active id 
// console.log(user.get('name'));


// setTimeout(() => {
//     console.log(user);
// },4000)
// const userName = user.get('name')
// const userAge = user.get('age')
// console.log(`username is ${userName} and his age is ${userAge} years`);

// const update ={
//     name:"ankitsinh",
//     age:22
// }

// user.set(update)
// const userName = user.get('name')
// const userAge = user.get('age')
// console.log(`username is ${userName} and his age is ${userAge} years`);

// user.on('change',()=>{
//     console.log('Change 1');
    
// })
// user.on('change',()=>{
//     console.log('Change 2');
// })
// user.on('save',()=>{
//     console.log('save event');
// })
// console.log(user);

// user.trigger('change')
// user.trigger('save')


// import axios from 'axios';

// axios.post('http://localhost:3000/users',{
//     name:"ankitsinh",
//     age:20
// }).then((res)=>{
//     console.log('create user success:',res.data); 
// });

// axios.get('http://localhost:3000/users').then((res) => {
//     console.log(res.data); 
// })


// const user =new User({id:0})
// user.on('change',()=>{
//     console.log(user);
// })

// user.fetch()
// // console.log(user);

// const user =User.buildUser({id:1})
// user.on('change',()=>{
//     console.log(user);
// })

// user.fetch()

// axios.get('http://localhost:3000/users').then ( (response: AxiosResponse)=>{
//     console.log(response.data);  
// })


//=======================================================================================

// const collection = new Collection('http://localhost:3000/users',
// (json: UserProps) => User.buildUser(json))

// const collection = User.buildUserCollection()
// collection.on('change',()=>{
//     console.log(collection);
// })

// collection.fetch()

//=======================================================================================
const user = User.buildUser({name:"ANKIT",age:22});

const root = document.getElementById('root')

if(root){
    const userEdit = new UserEdit(root ,user)
    userEdit.render()
    console.log(userEdit);
    
}else {
    throw new Error ( 'root element not found')
}


//=======================================================================================


// const users = new Collection('http://localhost:3000/users',
//     (json: UserProps)=>{
//     return User.buildUser(json)
// });

// users.on('change',()=>{
//     const root= document.getElementById('root');
    
//     if(root){
//         new UserList(root, users).render()
//     }
// });

// users.fetch()