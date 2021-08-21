'use strict'
const Node =require('./Node')
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
  
  
     includes(value) {
     
  let p=this.head
  while(p!==null){
  
    if(p.data==value){
      return true
    }
    p=p.next 
  
  }
  return false
  
  
     }
      tostring() {
     
          let current = this.head;
          let str=" ";
          while (current!==null) {
              str=str+`{${current.data}}->`;
              current=current.next;
              
          }
          
          str=str+'NULL';
  
          return str;
          
      }
  
  
  }
module.exports=Linkedlist  ;