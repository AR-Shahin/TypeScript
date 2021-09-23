export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.area = 0;
    }
    calculateArea() {
        this.area = this.height * this.width;
        return this.area;
    }
}
