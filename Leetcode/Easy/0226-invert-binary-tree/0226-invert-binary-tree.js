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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root){
      return root
  }
  let queue=[root]
  while(queue.length){
    let val= queue.shift()
    let tmp= val.right
    val.right=val.left
    val.left=tmp
    if(val.right&&val.left){
       queue.push(val.left,val.right)
    }else if(val.right){
      queue.push(val.right)
    }else if(val.left){
      queue.push(val.left)
    }
  }
  return  root
};