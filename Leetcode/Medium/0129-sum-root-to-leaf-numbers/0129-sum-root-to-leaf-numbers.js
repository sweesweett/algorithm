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
var sumNumbers = function(root) {
    let sum=0
    const dfs=(root,numStr)=>{

        if(!root){
            return 
        }
        if(!root.left&&!root.right){
            sum+=Number(numStr+root.val)
            return;
        }
        dfs(root.left,numStr+root.val)
        dfs(root.right,numStr+root.val)



    }
    dfs(root,'')
    return sum
};