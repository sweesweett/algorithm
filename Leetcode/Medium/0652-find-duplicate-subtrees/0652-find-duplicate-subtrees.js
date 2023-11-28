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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map= new Map()
    let ans=[]
    const dfs=(root)=>{
        if(!root){
            return '/'
        }
  
        let str=`${root.val}!${ dfs(root.left)}!${dfs(root.right)}`
        map.set(str,(map.get(str)||0)+1)
        if(map.get(str)===2){
            ans.push(root)
        }
        return str
        
    }
   
    dfs(root)
    return ans
};