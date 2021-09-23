import { Person } from "./classes/Person.js";
import { Rectangle } from "./classes/Rectangle.js";
const log = (el = "Ok!") => console.log(el);
const add = (a, b) => a + b;
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
let mixVar;
mixVar = 'Shahin';
mixVar = {};
let mixArr = [];
mixArr.push(10);
mixArr.push({});
let obj;
obj = {
    name: 'shain', age: 21
};
let x;
x = 1.5;
// Function Signature 
// let printUserInfo : (id:number, info:{
//     name:string,
//     email:string,
//     age:number
// }) => string;
// printUserInfo = (id,info) => `Id ${id}. name - ${info.name}`;
// log(printUserInfo(101,{name:'ShaHin',email:'s@mail.com',age:21}))
let shahin = new Person('shahin', 's@mail.com', 21, {
    skills: ['PHP', 'JS'],
    isAdmin: true
});
let omi = new Person('Omi', 'o@Mail.com', 20, {
    skills: ['JS'],
    isAdmin: false
});
const persons = [];
persons.push(shahin);
persons.push(omi);
let rect1 = new Rectangle(10, 20);
// log(rect1.calculateArea())
// let o = {
//     name : 's',
//     age : 10
// }
// let id = 200;
// log({...o,id})
let h1 = document.querySelector('h1');
