const Node=require('./Node')

  
  // newnode=new Node(4)
  // console.log(newnode)
  
  class Queue{
    constructor(){
      // this.top=null
      this.front=null
      this.rear=null
      this.size=0
    }
    isEmpty(){
      return this.front==null
    }
    Enqueue(value){
      let newnode=new Node(value)
  
  
          
          if (this.size==0){
            this.front=newnode
            this.rear=newnode
          }
          else{
            this.rear.link=newnode
            this.rear=newnode
  
          }
       
          
          this.size+=1
  
  
     
    }
    len(){
      return this.size
    }
     Dequeue  (){
       if(this.front==null){
         return 'queue is empty'
       }
       let p=this.front
       this.front=this.front.link
       p.link=null
       this.size-=1
       return p
  
   
       
       
  
  
  
  
    
    }
    peek(){
      let  p=this.front
      p.link=null
      return p
    }
  
  
  }
  module.exports=Queue
//   let newnode=new Queue()
//   newnode.Enqueue(3)
//    newnode.Enqueue(4)
//     newnode.Enqueue(5)
  
  
//   console.log(newnode)
//   console.log(newnode.Dequeue())

//   console.log(newnode.peek())
//   console.log(newnode.len())
  