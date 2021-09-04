"use strict";

const Stack = require("./Stack");

function validateBrackets(string) {
  const newStack = new Stack();

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "[" || string[i] == "{" || string[i] == "(") {
      newStack.push(string[i]);
    } else if (
      (newStack.peek() == "[" && string[i] == "]") ||
      (newStack.peek() == "{" && string[i] == "}") ||
      (newStack.peek() == "(" && string[i] == ")")
    ) {
      newStack.pop();
    }
  }
  if (newStack.isEmpty()) {
    return false;
  } else {
    return true;
  }
}

let string1 = "{()[]}";
let string2 = "{}(){}";


console.log(validateBrackets(string1));
console.log(validateBrackets(string2));


module.exports=validateBrackets;