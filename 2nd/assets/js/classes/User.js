import { Auth } from "./Auth.js";
export class User extends Auth {
    constructor(name, password, email) {
        super();
        this.name = name;
        this.password = password;
        this.email = email;
    }
    sendEmail() {
        console.log(`Mail has been sent on ${this.email}`);
    }
    getEmail() {
        return this.email;
    }
    authenticate() {
        console.log(`I am authenticated!`);
    }
}
