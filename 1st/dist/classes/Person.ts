interface dataInterface {
    skills : string[],
    isAdmin : boolean
}

export class Person {
    constructor(
        public name : string,
        private email : string,
        readonly age : number,
        public data : dataInterface
    ){}

    getEmail(){
        return this.email;
    }

    info(){
        return `Name : ${this.name}.Email : ${this.email}. Age ${this.age}`;
    }
    getData(){
        return this.data;
    }
    isAdmin(){
        let {isAdmin} = this.data;
        return isAdmin;
    }
}
