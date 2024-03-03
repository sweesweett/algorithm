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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let count=0
  const helper=(node,sum)=>{
      if(!node){
        return 0
      }
      if(sum+node.val===targetSum){
        count+=1
      }
      helper(node.left,sum+node.val)
      helper(node.right,sum+node.val)
     
  }
  const dfs=(node,sum)=>{
      if(!node){
        return sum
      }
      if(sum!==Infinity){
         helper(node,0)
      }else{
        sum=0
      }
      if(sum+node.val===targetSum){
        count+=1
      }
      dfs(node.left,sum+node.val)
      dfs(node.right,sum+node.val)
  }
  dfs(root,Infinity)
  return count
}