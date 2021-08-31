
const Node=require('../Node')

const Animal=require('./Animal')

const Queue=require('../Queue')

  class AnimalShelter {
    constructor(){
      this.catQueue=new Queue()
      this.dogQueue=new Queue()
  }

    enqueue(anaimal){
      if(anaimal.type=='cat')
      this.catQueue.Enqueue(anaimal.type)
    
    else if(anaimal.type=='dog'){
      this.dogQueue.Enqueue(anaimal.type)
    }
    else{
    return 'this type must be dog or cat'
    }
    }

    dequeue(perf)
    {
      if(perf=='cat'){
        this.catQueue.Dequeue()
      }
      else if(perf=='dog'){
        this.dogQueue.Dequeue()
      }
      else{
        return 'null'
      }
      
     
     


  
  }
  
  }
  module.exports=AnimalShelter

  
let dog =new Animal('dog')
let newnode=new AnimalShelter()
newnode.enqueue(dog)

  


 

console.log(newnode)


  
    

  
