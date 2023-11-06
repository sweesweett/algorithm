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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let set = new Set(to_delete)
    let deletedArr=[]
    const dfs=(root)=>{
        if(!root){
            return null
        }
        root.left= dfs(root.left)
        root.right=dfs(root.right)
        if(set.has(root.val)){
            root.left&&deletedArr.push(root.left)
            root.right&&deletedArr.push(root.right)
            return null
        }
        return root
        
    }
    dfs(root)
    if(!set.has(root.val)){
        deletedArr.push(root)
    }
    return deletedArr
};