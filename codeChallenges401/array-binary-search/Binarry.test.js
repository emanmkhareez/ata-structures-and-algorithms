'use strict'

      const BinarrySearch=require('./BinarrySearch')
      
      describe('Testing challenge 3', () => {
        it('It returns an index to item  ', () => {
            expect(BinarrySearch([-131, -82, 0],-82)).toBe(1);
            expect(BinarrySearch([-131, -82, 0],6)).toBe(-1);
        });
    });