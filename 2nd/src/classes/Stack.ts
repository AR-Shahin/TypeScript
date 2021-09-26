export class Stack<T> {
    private elements: T[] = [];

    constructor (
        private size:number
    ){}

    isEmpty():boolean{
        return this.elements.length === 0;
    }
    isFull():boolean{
        return this.elements.length === this.size;
    }
    display():void {
        if(this.isEmpty()){
            throw new Error('Stack is Empty!');
        }
        this.elements.forEach(item => {
            console.log(item)
        })
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }

    pop(){
        if(this.elements.length === 0){
            throw new Error('Stack is Empty!');
        }
        return this.elements.pop();
    }
    sizeOfStack(){
        return this.elements.length;
    }
}
