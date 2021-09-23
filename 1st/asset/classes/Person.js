export class Person {
    constructor(name, email, age, data) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.data = data;
    }
    getEmail() {
        return this.email;
    }
    info() {
        return `Name : ${this.name}.Email : ${this.email}. Age ${this.age}`;
    }
    getData() {
        return this.data;
    }
    isAdmin() {
        let { isAdmin } = this.data;
        return isAdmin;
    }
}
