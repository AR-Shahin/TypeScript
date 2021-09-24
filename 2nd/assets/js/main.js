import { Student } from "./classes/Student.js";
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
// log(manyNumber(1,2,3))
let st1 = new Student('Shahin', 'aa', 's@mail.com', 101);
log(st1.getEmail());
st1.authenticate();
st1.mail(st1.getEmail());
log(Student.test);
