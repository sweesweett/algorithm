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
var reverseOddLevels = function(root) {
    const map = new Map()
    const dfs=(root,level)=>{
      if(!root){
        return;
      }
      if(level%2){
        if(!map.has(level)){
          map.set(level,[root.val])
        }else{
          map.set(level,[...map.get(level),root.val])
        }
      }
      dfs(root.left,level+1)
      dfs(root.right,level+1)
    }
  const dfs2=(root,level)=>{

    if(!root){
      return;
    }
    if(level%2){
      let mapArr= map.get(level)
      root.val=mapArr.pop()

    }
    dfs2(root.left,level+1)
    dfs2(root.right,level+1)
    
  }
  dfs(root,0)
  dfs2(root,0)
  return root
};