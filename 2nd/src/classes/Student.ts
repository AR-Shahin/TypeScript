import { Mail } from "../interface/Mail.js";
import { User } from "./User.js";
export class Student extends User implements Mail{
    constructor(
        public name:string,
        password : string,
        readonly email :string,
        private id:number
    ) {
        super(name,password,email)
    }
    public static test = 'Test';
    public static addMrName :string = `Mr. ${this.name }`; 
    getId():number {
        return this.id;
    }
    mail(email:string){
        console.log(`Mail Has Been Sent!${email}`)
    }
}

