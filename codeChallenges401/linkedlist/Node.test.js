
const Node=require('./Node')

describe('Test Node class',()=>{
    it('should create New Node',()=>{
        let node=new Node(6)
        expect(node.data).toBe(6)
        expect(node.next).toBe(null)
    })
})