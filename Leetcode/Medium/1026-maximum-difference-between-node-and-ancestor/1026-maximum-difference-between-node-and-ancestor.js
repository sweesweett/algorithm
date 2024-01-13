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
var maxAncestorDiff = function(root) {
    let maxValue=-Infinity
    const dfs=(node,min,max)=>{
        if(!node){
            maxValue=Math.max(Math.abs(min-max),maxValue)
            return
        }
        if(min===null){
            min=node.val
            max=node.val
            maxValue=0

        }else{
            min=Math.min(node.val,min)
            max=Math.max(node.val,max)

        }
        dfs(node.left,min,max)
        dfs(node.right,min,max)


    }
    dfs(root,null,0)
    return maxValue
};