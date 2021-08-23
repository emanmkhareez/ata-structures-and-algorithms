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
          let str="";
          while (current!==null) {
              str=str+`{${current.data}}->`;
              current=current.next;
              
          }
          
          str=str+'NULL';
  
          return str;
          
      }

      kth(value){
        if(  value < 0 || value>this.size ){
          return false
        }


        
        let  pt=this.head
       //  console.log(pt.data)
        pt=pt.next
             // console.log(pt.next)
             // console.log(this.size)
 
       for(let i=1;i<this.size - value +1 ;i++ )
       {
            pt=pt.next
       }
        
      
        
       return  pt.data
 
     }
     
  
  }
  const list= new Linkedlist()
     list.insert(4)
     console.log(list)
     list.insert(6)
     console.log(list)
     list.insert(8)
     console.log(list)
     list.insert(10)
     console.log(list)
     list.khl(0)
     console.log('gggg',list)
  
module.exports=Linkedlist  ;