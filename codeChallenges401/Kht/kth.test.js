const Linkedlist=require('./kth')

describe('kth singlel inkedList',()=>{

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
        it("Where k is greater than the length of the linked list ||Where k is not a positive integer",()=>{
            let node=new Linkedlist()
            node.insert(5)
            node.insert(6)
            
            expect(node.kth(-1)).toBe(false)
            

        })
        it("Where k and the length of the list are the same",()=>{
            let node=new Linkedlist()
            node.insert(5)
            node.insert(6)
            
            expect(node.kth(1)).toBe(5)
        })


})
});
