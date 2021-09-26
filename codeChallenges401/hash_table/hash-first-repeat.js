const Hashmap = require("./hashtable");
// function to repeat the first word 
function repeat(str) {
    //converte the word to lower case and split that 
  let words = str.toLowerCase().split(" ");
  //create new instance from hash class
  let hashmap = new Hashmap(words.length);
  //loop around the word to check and add the word 
  for (let i = 0; i < words.length; i++) {
    if (!hashmap.contain(words[i])) {
      hashmap.add(words[i], words[i]);
    } else {
      return words[i];
    }
  }
  return null;
}

let example1 ="Once upon a time, there was a brave princess who...";
let example2="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

console.log("paragraph 1: ",repeat(example1));
console.log("paragraph 2: ",repeat(example2));

module.exports=repeat;