'use strict'

      const binarySearch=require('./binarySearch')
      
      describe('Testing challenge 3', () => {
        it('It returns an index to item  ', () => {
            expect(binarySearch([-131, -82, 0],-82)).toStrictEqual(1);
            expect(binarySearch([-131, -82, 0],6)).toStrictEqual(-1);
        });
    });