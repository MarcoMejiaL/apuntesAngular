const username:string = 'marco';
const suma = (a:number, b:number)=>{
    return a+b
}
suma(1,2)

class Person{
    age: number;
    lastName:string;

    constructor(age:number, lastName:string){
        this.age =age;
        this.lastName =lastName
    }
}

const marco = new Person (32,'mejia');