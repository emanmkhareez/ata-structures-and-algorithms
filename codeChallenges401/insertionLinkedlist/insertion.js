'use strict'
const Node=require('./Node')
class Linkedlist {

    constructor() {
      this.tail = null;
      this.head = null;
      this.size = 0
    }
    isempty() {
      return this.size == 0
    }
    lengthlist() {
      return this.size
    }
    insert(item) {
  
      let newnode = new Node(item)
      newnode.next = this.head
      this.head = newnode;
      if (this.size == 0) {
        
       this.tail=newnode
       
     
      }
  
     
      this.size += 1
  
  
  
    }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
    
  insertBefore(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    if(current.value===value){
      newNode.next=current;
      this.head=newNode;
    }
    while (current.next) {
      if(current.next.data==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
  }
  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
      if(current.data==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
  }
  
}

module.exports=Linkedlist