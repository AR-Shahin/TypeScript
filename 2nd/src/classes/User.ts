import { Auth } from "./Auth.js";

export class User extends Auth {
    constructor(
        public name:string,
        private password : string,
        readonly email :string
    ){
        super()
    }
   
    sendEmail():void{
        console.log(`Mail has been sent on ${this.email}`);
    }
    getEmail():string {
        return this.email;
    }

    authenticate(){
        console.log(`I am authenticated!`);
    }
}
