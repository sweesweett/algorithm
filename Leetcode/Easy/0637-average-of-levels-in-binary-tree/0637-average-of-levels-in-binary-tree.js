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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const ans=[]
    const dfs=(root,level)=>{
        if(!root){
            return;
        }
        if(ans[level]===undefined){
                ans[level]=[root.val]
        }else{
                ans[level].push(root.val)
        }
        dfs(root.left,level+1)
        dfs(root.right,level+1)
        
    }
    dfs(root,0)
    return ans.map(el=>el.reduce((a,b)=>a+b,0)/el.length)
};