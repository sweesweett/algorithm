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
var averageOfSubtree = function(root) {
    let count=0
    const dfs=(root)=>{

        if(!root){
            return [0,0]
        }
        let [length,value]=dfs(root.left)
        let [length2,value2]=dfs(root.right)
        let currentLength=length+length2+1
        let currentValue=value+value2+root.val
        if(Math.floor(currentValue/currentLength)===root.val){
            count++
        }

        return [currentLength,currentValue]
    }
    dfs(root)
    return count
};