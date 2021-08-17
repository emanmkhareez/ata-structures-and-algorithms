


const binarySearch = (arr, val) => { 
    for (let i = 0; i < arr.length; i++)
     { if (arr[i] === val) { return i; } }
      return -1; };

      ////////////////////test///////////////////////////////////////////////
      
describe('Testing challenge 1', () => {
    it('It returns an index to item  ', () => {
        expect(binarySearch([-131, -82, 0],-82)).toStrictEqual(1);
        expect(binarySearch([-131, -82, 0],6)).toStrictEqual(-1);
    });
});