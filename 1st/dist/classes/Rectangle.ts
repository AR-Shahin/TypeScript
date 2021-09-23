import { RectangleInterface } from "../interfaces/RectangleInterface.js";

export class Rectangle implements RectangleInterface{
    constructor(
        public height:number,
        public width : number
    ){}
    area : number = 0;
    calculateArea(){
        this.area = this.height  * this.width;
        return this.area;
    }

}
