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
var sumOfLeftLeaves = function(root) {
    const arr=[]
    const dfs=(node,direction)=>{
   
        if(node.left===null&&node.right===null){
            if(direction==='left'){
            arr.push(node.val)
        }
            return;
        }
        if(node.left!==null){
            dfs(node.left,'left')
        }
        if(node.right!==null){
            dfs(node.right,'right')
        }
        
    }
    if(!root){
        return 0
    }
    dfs(root)
    return arr.reduce((a,b)=>a+b,0)
};