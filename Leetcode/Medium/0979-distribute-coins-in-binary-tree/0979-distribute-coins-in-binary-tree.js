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
var distributeCoins = function(root) {
    let count=0

    const dfs=(root)=>{
        if(!root){
            return 0
        }
        let left= dfs(root.left)
        let right = dfs(root.right)
        count+=Math.abs(left)+Math.abs(right)
        return left+right+root.val-1
 
    }
    dfs(root,0)
    return count
};