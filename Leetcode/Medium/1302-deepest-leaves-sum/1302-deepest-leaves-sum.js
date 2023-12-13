/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
 
  let stack=[root]
  let arr=[0]
  while(stack.length){
      let sum=0
      let stack2=[]
      for(let node of stack){
          if(node===null){
              continue
          }
          sum+=node.val
          stack2.push(node.left,node.right)
      }
     if(sum!==0){
         arr.push(sum)
     } 
     
     stack=stack2 
  }
  return arr.at(-1)
};