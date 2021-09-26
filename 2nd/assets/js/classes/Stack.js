export class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    display() {
        if (this.isEmpty()) {
            throw new Error('Stack is Empty!');
        }
        this.elements.forEach(item => {
            console.log(item);
        });
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length === 0) {
            throw new Error('Stack is Empty!');
        }
        return this.elements.pop();
    }
    sizeOfStack() {
        return this.elements.length;
    }
}
