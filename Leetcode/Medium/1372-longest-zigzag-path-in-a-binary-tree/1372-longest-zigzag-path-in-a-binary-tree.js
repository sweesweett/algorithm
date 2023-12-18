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
var longestZigZag = function(root) {
    let max=0
    const dfs=(node,prev,total)=>{
        
        if(!node){
            max=Math.max(total,max)
            return
        }
        total+=1
        if(prev==='left'){
            dfs(node.right,'right',total)
            dfs(node.left,'left',1)
        }else{
            dfs(node.right,'right',1)
            dfs(node.left,'left',total)
        }
    }




    dfs(root.right,'right',1)
    dfs(root.left,'left',1)
    return max-1
};