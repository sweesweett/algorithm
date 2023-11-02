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
var maxLevelSum = function(root) {
    let arr=[]
    let max=-Infinity
    let idx=-1
    const dfs=(root,level)=>{
        if(!root){
            return;
        }
        if(arr[level]===undefined){
            arr.push(root.val)
        }else{
            arr[level]+=root.val
        }
        dfs(root.left,level+1)
        dfs(root.right,level+1)    
    }
    dfs(root,0)

    arr.forEach((el,i)=>{
        if(max<el){
            max=el
            idx=i
        }
    })
    return idx+1
    
};