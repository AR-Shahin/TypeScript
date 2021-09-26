import {Student} from "./classes/Student.js";
import { Stack } from "./classes/Stack.js";
const log = (el:any = 'OK!') => console.log(el);

enum Day  {
    'Saturday',  'Sunday',
}

const getDay = (day:number) => {
    if(day == 1){
        return Day.Saturday;
    }else{
        return Day.Sunday;
    }
}

// log(getDay(1));
const switchCase = (el:number):number => {
    let sum:number = 0;
    switch(el){
        case 1:
        case 2:
            sum =  1 + 2;
            break;
        case 3 :
            sum = 3;
            break;
        default:
            sum = 10;
    }
    return sum;
}

// log(switchCase(6))

let add : (a:number,b:number) => number = (x:number,y:number) => x + y;


// log(add(10,5))

const manyNumber = (...args : number[]) : number=> {
    // let total:number = 0;
    // args.forEach((item) => total += item);
    // return total;
    return args.reduce((prev,next) => prev + next)
}

// log(manyNumber(1,2,3))

// let st1 = new Student('Shahin','aa','s@mail.com',101);
// log(st1.getEmail())
// st1.authenticate();
// st1.mail(st1.getEmail());
// log(Student.test)


interface A {
    email : string
}

interface B {
    name : string
}

type combineAB = A & B;

let obj : combineAB = {
    name:'shahin',
    email : 's@mail.com',
}

const getRandomItem = <T>(items:T[]) : T => {
    let random = Math.floor(Math.random() * items.length)
    return items[random];
}

// let num : number;
// num = getRandomItem<number>([10,20,30,50]);
// log(num)
// log(getRandomItem(['omi','io','og','of']))

const merge = <U, V> (items:U[], items2:V[]) => {
    return [
        ...items,
        ...items2,
        150
    ]
}

let v1 = merge([10,20],[30,50])
// log(v1)
function merge2<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
let result = merge2(
    { name: 'John' ,age:10},
    { jobTitle: 'Frontend Developer' }
);
// console.log(result);

const mergeTwoArray = <A ,B>(arr1 : A[], arr2 : B[]) => {
    return [...arr1,...arr2];
}

log(mergeTwoArray([10,20,30],[50,20,60]))

const mergeTwoObject = <A extends object,B extends object>(arr1 : A, arr2 : B) => {
    return {...arr1,...arr2};
}

// log(mergeTwoObject({name:'shahin',age:50},{work:'laravel'}))
// log(mergeTwoObject({name:'shahin',age:50},50))

const getSingleValueFromObject =<O extends object, K extends keyof O> (obj:O ,key:K) => {
    return obj[key];
}
// log(getSingleValueFromObject({name:'Shahin',age:21,skills:['PHP','JS','TS']},'skills'))

let stack = new Stack<number>(3);
// stack.push(10);
// stack.push(20);
// log(stack.sizeOfStack())
// // stack.push(30);
// log(stack.pop())
// // stack.push(10);
log(stack.sizeOfStack())

stack.push(50)
stack.push(60)
log(stack.pop())
stack.push(70)

// stack.display()
