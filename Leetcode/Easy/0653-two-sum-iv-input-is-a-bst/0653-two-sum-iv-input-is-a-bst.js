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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map= new Map()
    const dfs=(root)=>{
        if(!root){
            return;
        }
        if(root.val!==null){
            if(k>=0&&root.val<0){
                 map.set(root.val,root.val+k)
            }else{
                map.set(root.val,k-root.val)
            }

           
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root,0)
    if(map.size===1){
        return false
    }
    for(let [key,value] of map){
        if(map.has(value)&&key!==value){
            return true
        }
    }
    return false
};