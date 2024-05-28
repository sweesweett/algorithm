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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let arr=[]
  const dfs=(node,str)=>{
    if(!node){
      return
    }
     if(!str){
        str+=node.val
     }else{
        str+=`->${node.val}` 
     }
      if(!node.left&&!node.right){
        arr.push(str)
        return
     }
     dfs(node.left,str)
     dfs(node.right,str)
  }
  dfs(root,'')
  return arr 
};