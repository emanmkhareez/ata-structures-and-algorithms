const Node=require('../linkedlist/Node')
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
    
    kth(value){
       let  pt=this.head

      for(let i=1;i< (this.size-value) +1;i++)
         { pt=pt.next} 

   
        return  pt.data}

    
  
  
  }
  module.exports=Linkedlist