/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr1=[]
    let arr2=[]
    dfs(root1,arr1)
    dfs(root2,arr2)
    if(arr1.length!==arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
};
 const dfs=(node,arr)=>{
    if(!node){
        return;
    }
    if(!node.left&&!node.right){
        arr.push(node.val)
    }
    dfs(node.left,arr)
    dfs(node.right,arr)
    }