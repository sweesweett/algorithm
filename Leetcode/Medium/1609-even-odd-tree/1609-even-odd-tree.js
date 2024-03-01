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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let stack=[[root,0]]
  while(stack.length){
      let tmp=[]
      let left;
      for(let [node,depth] of stack){
        if(!node){
          continue
        }
     
        if((depth+1)%2===node.val%2){
   
          if(left!==undefined&&(depth+1)%2&&left>=node.val){
            return false
          }else if(left!==undefined&&(depth+1)%2===0&&left<=node.val){
            return false
          }
          left=node.val
          tmp.push([node.left,depth+1],[node.right,depth+1])
      }else{
        return false
      }
      }
      stack=tmp
  }
  return true
};