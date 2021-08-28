const Node=require('./Node')
  
  // newnode=new Node(4)
  // console.log(newnode)
  
  class Stack{
    constructor(){
      // this.top=null
      this.top=null
      this.tail=null
      this.size=0
    }
    isEmpty(){
      return this.top==null
    }
    push(value){
      let newnode=new Node(value)
  
      newnode.link=this.top
          this.top=newnode
   
          
          if (this.size==0){
            this.tail=newnode
          }
       
          
          this.size+=1
  
  
     
    }
    len(){
      return this.size
    }
     pop  (){
       if(this.top==null){
         return 'stack is empty'
       }
       let p=this.top
       this.top=this.top.link
       p.link=null
       this.size-=1
       return p
  
   
       
       
  
  
  
  
    
    }
    peek(){
      let  p=this.top
      p.link=null
      return p
    }
  
  
  }
  module.exports=Stack
//   let newnode=new Stack()
//   newnode.push(3)
//   newnode.push(4)
//   newnode.push(5)
  
  
//   console.log(newnode)
//   // console.log(newnode.pop())
//   // console.log(newnode.pop())
//   console.log(newnode.peek())
//   console.log(newnode.len())
  