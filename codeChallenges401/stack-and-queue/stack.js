class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length = this.length + 1;
    }


    pop() {
        if (!this.top) {
            return 'Empty Stack';
        }
        let ptr = this.top;

        this.top = ptr.next;
        ptr.next = null;
        this.length = this.length - 1;
        return ptr.value;

    }

    peek() {
        if (!this.top) {
            return 'Empty Stack';
        }
        return this.top.value;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports=Stack