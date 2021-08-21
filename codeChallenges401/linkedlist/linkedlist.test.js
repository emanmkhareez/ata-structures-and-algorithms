const Linkedlist=require("./Linkedlist")

describe('test linkedlist',( ) =>{
    it('should be create empty list',()=>{

        let node=new Linkedlist()
        expect(node.head).toBe(null)
        expect(node.tail).toBe(null)
        expect(node.size).toBe(0)
   
    })
    it('should insert node to empty  linked list ',()=>{
        let node=new Linkedlist()
     
       node.insert(7)
       expect(node.head.data).toBe(7)
       expect(node.head.next).toBe(null)
       
       expect(node.tail.data).toBe(7)
       expect(node.tail.next).toBe(null)
       expect(node.size).toBe(1)
    })
    it ('should insert  many node to  linkedlist ',()=>{
        let node=new Linkedlist()
        node.insert(5)
        node.insert(6)

        expect(node.head.data).toBe(6)
        expect(node.head.next.data).toBe(5)
        expect(node.tail.next).toBe(null)
        expect(node.tail.data).toBe(5)
        expect(node.size).toBe(2)
    })
    it("should return true if finding the value in linkedlist",() =>{
        let node =new Linkedlist()
        node.insert(5)
        node.insert(6)
        expect(node.includes(5)).toBe(true)
        expect(node.includes(6)).toBe(true)
        expect(node.includes(4)).toBe(false)

    })
    it("should return false if finding the value in linkedlist",() =>{
        let node =new Linkedlist()
        node.insert(5)
        node.insert(6)
        
      
        expect(node.includes(4)).toBe(false)

    })
    
    it("toString method",()=>{
let node=new Linkedlist()
        node.insert(5)
        node.insert(6)
        expect(node.tostring()).toBe('{6}->{5}->NULL')
    })


  
})