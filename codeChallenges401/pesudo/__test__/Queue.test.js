"use strict";

let pQueue = require("../Queue");


describe("Queue", () => {
   
      it("enqueue multiple values into a queue", () => {
        let newQueue = new pQueue();
        newQueue.enqueue(9);
        newQueue.enqueue(8);
        expect(newQueue.stack1.isEmpty()).toEqual(false);
        expect(newQueue.stack2.isEmpty()).toEqual(true);
      });
      it(" dequeue out of a queue the expected value", () => {
        let newQueue = new pQueue();
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        newQueue.enqueue(4);
       
        expect(newQueue.dequeue()).toEqual(2);
      });
    
      it("empty a queue after multiple dequeues", () => {
        let newQueue = new pQueue();
        newQueue.enqueue(9);
        newQueue.enqueue(8);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.stack1.top).toBeNull();
        expect(newQueue.stack2.top).toBeNull();
      });
      it(" instantiate an empty queue", () => {
        let newQueue = new pQueue();
        expect(newQueue instanceof pQueue).toBeTruthy();
      });
      it("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue = new pQueue();
        expect((newQueue.dequeue())).toEqual('stack is empty');
      });

      it("enqueue into a queue", () => {
        let queue = new pQueue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        expect(queue.size).toBe(3);
      });
     

});