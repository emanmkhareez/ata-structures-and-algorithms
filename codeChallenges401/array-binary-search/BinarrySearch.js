'use strict'
let arr=[1,2,3,4,5,6,7,8]
function BinarrySearch(array,value){
  let low=0
  let hight=array.length -1
  while(low<=hight){
    let mid=Math.round((low+hight)/2)
    if(array[mid]==value){
      return mid
    }
     if(array[mid]>value){
      hight=mid-1
    }
    else {
      low=mid+1
    }
   
  }
  return -1
  
  }
