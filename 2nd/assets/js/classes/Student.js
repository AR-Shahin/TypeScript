var _a;
import { User } from "./User.js";
export class Student extends User {
    constructor(name, password, email, id) {
        super(name, password, email);
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    mail(email) {
        console.log(`Mail Has Been Sent!${email}`);
    }
}
_a = Student;
Student.test = 'Test';
Student.addMrName = `Mr. ${_a.name}`;
