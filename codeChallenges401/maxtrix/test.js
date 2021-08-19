
let array=[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]
let sumFun =(arr)=>{
  
  let newarray=[]
  let sum ;
  for(let i=0;i<arr.length;i++){
    sum=0
    for (let j=0;j<arr[i].length;j++)
    sum+=arr[i][j]
    newarray.push(sum)
    
  }

  return newarray
}
////////////////////////////////////test///////////////////////////////////
describe('Testing challenge 4', () => {
  it('It sum of inner array  ', () => {
      expect(sumFun([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual(	[6, 15, 18]);
      expect(sumFun([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toStrictEqual([6, 5, 20]);
  });
});