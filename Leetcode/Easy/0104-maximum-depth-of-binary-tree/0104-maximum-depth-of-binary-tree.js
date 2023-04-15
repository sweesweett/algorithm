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
var maxDepth = function(root) {
  let arr=[]
  function dfs(num,node){
    if(node.left===null&&node.right===null){
        arr.push(num)
        return
    }
    if(node.left!==null){
        dfs(num+1,node.left)

    }
    if(node.right!==null){
           dfs(num+1,node.right)
    }
} 
  if(!root){
    return 0
  }
  if(root.left!==null){
      dfs(2,root.left)
  }
  if(root.right!==null){
        dfs(2,root.right)
  }
  if(arr.length===0){
    return 1
  }
    return Math.max(...arr)
};
