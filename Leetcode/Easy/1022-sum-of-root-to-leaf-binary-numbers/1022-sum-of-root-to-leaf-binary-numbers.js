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
var sumRootToLeaf = function(root) {
    let ans=[]
    let dfs=(root,str)=>{
        
        if(!root){  
            return;
        }
        if(root.left===null&&root.right===null){
            ans.push(str+root.val)
        }   
        dfs(root.left,str+root.val)
        dfs(root.right,str+root.val)
        
        
    }
    dfs(root,'')
    return ans.reduce((a,b)=>a+parseInt(b,2),0)
};