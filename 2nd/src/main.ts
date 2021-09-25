import {Student} from "./classes/Student.js";
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
