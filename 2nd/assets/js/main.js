import { Stack } from "./classes/Stack.js";
const log = (el = 'OK!') => console.log(el);
var Day;
(function (Day) {
    Day[Day["Saturday"] = 0] = "Saturday";
    Day[Day["Sunday"] = 1] = "Sunday";
})(Day || (Day = {}));
const getDay = (day) => {
    if (day == 1) {
        return Day.Saturday;
    }
    else {
        return Day.Sunday;
    }
};
// log(getDay(1));
const switchCase = (el) => {
    let sum = 0;
    switch (el) {
        case 1:
        case 2:
            sum = 1 + 2;
            break;
        case 3:
            sum = 3;
            break;
        default:
            sum = 10;
    }
    return sum;
};
// log(switchCase(6))
let add = (x, y) => x + y;
// log(add(10,5))
const manyNumber = (...args) => {
    // let total:number = 0;
    // args.forEach((item) => total += item);
    // return total;
    return args.reduce((prev, next) => prev + next);
};
let obj = {
    name: 'shahin',
    email: 's@mail.com',
};
const getRandomItem = (items) => {
    let random = Math.floor(Math.random() * items.length);
    return items[random];
};
// let num : number;
// num = getRandomItem<number>([10,20,30,50]);
// log(num)
// log(getRandomItem(['omi','io','og','of']))
const merge = (items, items2) => {
    return [
        ...items,
        ...items2,
        150
    ];
};
let v1 = merge([10, 20], [30, 50]);
// log(v1)
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let result = merge2({ name: 'John', age: 10 }, { jobTitle: 'Frontend Developer' });
// console.log(result);
const mergeTwoArray = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
log(mergeTwoArray([10, 20, 30], [50, 20, 60]));
const mergeTwoObject = (arr1, arr2) => {
    return Object.assign(Object.assign({}, arr1), arr2);
};
// log(mergeTwoObject({name:'shahin',age:50},{work:'laravel'}))
// log(mergeTwoObject({name:'shahin',age:50},50))
const getSingleValueFromObject = (obj, key) => {
    return obj[key];
};
// log(getSingleValueFromObject({name:'Shahin',age:21,skills:['PHP','JS','TS']},'skills'))
let stack = new Stack(3);
// stack.push(10);
// stack.push(20);
// log(stack.sizeOfStack())
// // stack.push(30);
// log(stack.pop())
// // stack.push(10);
log(stack.sizeOfStack());
stack.push(50);
stack.push(60);
log(stack.pop());
stack.push(70);
// stack.display()
