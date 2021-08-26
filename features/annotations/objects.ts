const profile = {
    age: 20,
    name : 'sunny',
    cords : {
        lat : 22, 
        lon:24
    },
    setAge(age: number): void{
        this.age = age
    }
}
console.log(profile.name);

//object distructuring
// const {age , name  } : { age: number ; name: string} = profile
// console.log(age,name);
