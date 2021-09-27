class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    preOrder() {
      let result = [];
      let travers = (node) => {
        result.push(node.value);
        if (node.left) {
          travers(node.left);
        }
        if (node.right) {
          travers(node.right);
        }
      };
      travers(this.root);
      return result;
    }
  
    inOrder() {
      let result = [];
      let travers = (node) => {
        if (node.left) {
          travers(node.left);
        }
        result.push(node.value);
        if (node.right) {
          travers(node.right);
        }
      };
      travers(this.root);
      return result;
    }
  
    postOrder() {
      let result = [];
      let travers = (node) => {
        if (node.left) {
          travers(node.left);
        }
        if (node.right) {
          travers(node.right);
        }
        result.push(node.value);
      };
      travers(this.root);
      return result;
    }
  
    

    
  //method treeIntersection
    treeIntersection(tree1, tree2) {
        // if tree empty 
      if (!tree1 || !tree2) return"root dose not exist🆑"

      let array = [];
      // traverse over the trees
      const Traverse = (value1, value2) => {
        if (value1 && value2) {
          if (value1.value === value2.value) {
              //push the value to the array
            array.push(value1.value);
            console.log(array);
          }
          // if the node had left or right use recursive
          if (value1.left, value2.left) Traverse(value1.left, value2.left);
          if (value1.right, value2.right) Traverse(value1.right, value2.right);
        }
        return array;
      }
      
      Traverse(tree1, tree2);
      return array;
    }
  }
  