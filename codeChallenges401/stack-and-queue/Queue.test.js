  
'use strict'

const Queue=require('./Queue');

const Queue = require("../queue");
describe("Queue class", () => {
  it("enqueue into a queue ", () => {
    let queue = new Queue();
    queue.Enqueue("a");

    expect(queue.front.value).toBe("a");
  });
  it(" enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.Enqueue("a");
    queue.Enqueue("b");
    queue.Enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.rear.value).toBe("c");
  });
  it(" dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.Enqueue("a");
    queue.Enqueue("b");
    queue.Enqueue("c");
    queue.Dequeue();

    expect(queue.front.value).toBe("b");
    expect(queue.rear.value).toBe("c");
    expect(queue.Dequeue()).toBe("b");
  });
  it(" peek into a queue", () => {
    let queue = new Queue();
    queue.Enqueue("a");
    queue.Enqueue("b");
    queue.Enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.rear.value).toBe("c");
    expect(queue.peek()).toBe("a");
  });
  it("empty a queue ", () => {
    let queue = new Queue();
    queue.Enqueue("a");
    queue.Enqueue("b");
    queue.Enqueue();
    queue.Dequeue();
    

    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
  });
  it(" instantiate an empty queue", () => {
    let queue = new Queue();
    queue.Enqueue("a");
    queue.Enqueue("b");
    let newQueue=new Queue();

    expect(newQueue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("the Queue have values");
  });

});