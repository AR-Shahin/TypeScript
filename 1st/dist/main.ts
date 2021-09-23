import { Person } from "./classes/Person.js";
import { Rectangle } from "./classes/Rectangle.js";
const log = (el:any ="Ok!") :any => console.log(el);

const add = (a:number,b:number) : number => a + b;
// log(add(10,20));

// let playerName : string = "ShaHin";
// let age : number = 20.5;
// log(age)

// const numbers:number[] = [10,50];

// numbers.push(15);
// log(numbers);

// const mixed= [10,'shain',true,undefined];

// mixed.push(undefined)

// log(mixed)

// let obj = {
//     name : "ShaHin",
//     age: 21
// }

// obj.age = 21.5;
// log(obj)

let mixVar:string|object;

mixVar = 'Shahin';
mixVar = {};

let mixArr:(string|number|object)[] = [];
mixArr.push(10);
mixArr.push({})

let obj : {
    name:string,
    age : number
}

obj = {
    name:'shain',age:21
}


// let fun:Function;

// fun = (a:number,b:number,c?:number) => {
//     log(`number : ${a}. string : ${b}. C = ${c}`)
// }

// fun(10,'ss','s');

// const fun  = (a:number) => log(`a = ${a}`)

// fun('s')

type numOrString = string | number;

let x:numOrString;

x = 1.5

// Function Signature 

// let printUserInfo : (id:number, info:{
//     name:string,
//     email:string,
//     age:number
// }) => string;

// printUserInfo = (id,info) => `Id ${id}. name - ${info.name}`;


// log(printUserInfo(101,{name:'ShaHin',email:'s@mail.com',age:21}))




let shahin = new Person('shahin','s@mail.com',21,{
    skills : ['PHP','JS'],
    isAdmin : true
});

let omi = new Person('Omi','o@Mail.com',20,{
    skills : ['JS'],
    isAdmin : false
})
const persons:Person[] = [];

persons.push(shahin);
persons.push(omi);

let rect1 = new Rectangle(10,20);

// log(rect1.calculateArea())

// let o = {
//     name : 's',
//     age : 10
// }
// let id = 200;
// log({...o,id})

let h1 = document.querySelector('h1');



