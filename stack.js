class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove(){
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const numbers = new Stack();
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);
console.log(numbers.stack);
const getOne = numbers.remove();
console.log(getOne);
console.log(numbers.stack);