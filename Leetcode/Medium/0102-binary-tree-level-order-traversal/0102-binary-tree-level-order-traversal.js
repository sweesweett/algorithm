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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr=[]
    const dfs=(node,num)=>{
        if(!node){
            return;
        }
          if(node.val===undefined){
                return []
             }
        if(arr[num]===undefined){
            arr.push([])
        }
        
       arr[num].push(node.val)
        dfs(node.left,num+1)
        dfs(node.right,num+1)

    }
    dfs(root,0)
    return arr
};