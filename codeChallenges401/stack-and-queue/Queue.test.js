
const Queue = require('./Queue');


describe('enqueue', () => {
    let queue = new Queue();

    it('Creates an instance of Queue', () => {
        expect(queue instanceof Queue).toBeTruthy();
    });


    it('enqueue multiple values into a queue then dequeue ', () => {

        queue.Enqueue(1);
        queue.Enqueue(2);
        expect(queue.Dequeue()).toEqual(1);
        expect(queue.Dequeue()).toEqual(2);

    });


});

describe('peek', () => {
    let queue = new Queue();

    it('peek', () => {
        queue.Enqueue(1);
        queue.Enqueue(2);

        expect(queue.peek()).toBe(1);

    });


});
describe('it is empty queue', () => {
    let queue = new Queue();

    it('return false', () => {
        queue.Enqueue(1);
        queue.Enqueue(2);

        expect(queue.isEmpty()).toBeFalsy;

    });
    it('return true', () => {

        expect(queue.isEmpty()).toBeTruthy;
    });
    it('size ',()=>{
        let queue = new Queue();
        queue.Enqueue(1)
        queue.Enqueue(1)
        expect(queue.len()).toBe(2)

    })
});