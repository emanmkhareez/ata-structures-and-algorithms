"use strict";

const HashTable=require('./hashtable');
//function left join take tow instance from hash class
function leftJoin(first,second){
    second.map.forEach(bucket=>{
        //loop around the first hash 
        if (first.contain(bucket.head.data[key])) {

            let current=bucket.head;
            while (current.next) {
               first.add(current.val[key],current.data[key]); 
            }
            first.add(current.data[key],current.data[key]);
        }
    });
    return first;
}

let left = new HashTable(3);
let right = new HashTable(3);

left.add('fond', 'enamored');
left.add('wrath', 'anger');
left.add('diligent', 'employed');

right.add('fond', 'averse');
right.add('wrath', 'delight');
right.add('diligent', 'idle');

console.log(leftJoin(left,right));