"use strict";

const LinkedList = require("../linkedlist/Linkedlist");
 
class HashTable {
    //constructor  to create Array
  constructor(size) {

    this.size = size;
    this.map = new Array(size);
  }
//hash function to defined the index
  hash(key) {
    return (
        //split the key and converte the character to ASCII Code and sum the ASCII 
        //multiply with prime number and mod % on size the array
      (key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        19) %
      this.size
    );
  }
//function add 
  add(key, value ) {
    //calling the hash method and send the key 
    let converteKey = this.hash(key);
    console.log(converteKey);
    
    if (!this.map[converteKey]) {
        //create linkedList to solve collion problem 
      this.map[converteKey] = new LinkedList();
    }

    let newVal = { [key]: value };
    //store new value inside the proprite index
    this.map[converteKey].append(newVal);
  }
  //get method get approprite value deppend on key 

  get(key) {
    let converteKey = this.hash(key);
//if the map Dose not have  the key
    if (!this.map[converteKey]) return "value not found 🙂";

    let index = this.map[converteKey];
    let current = index.head;
    if (current.data[key]) return current.data[key];

    while (current.next) {
      current = current.next;
      if (current.data[key]) return current.data[key];
    }
  }
  // return true if the key exists  

  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;

    let index = this.map[hash];

    if (!index.head) {
      return false;
    } else {
      let current = index.head;
      if (current.val[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.val[key]) return true;
      }
    }
  }
}

const hashmap = new HashTable(1024);
hashmap.add("flower", "🌺");
hashmap.add("emoji", '😋');


console.log("a", hashmap);
console.log("b", hashmap.map[755]);

console.log("get method", hashmap.get("flower"));
console.log("get method", hashmap.contain("emoji"));

module.exports = HashTable;