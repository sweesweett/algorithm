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
var findMode = function(root) {
    let map= new Map()
    const dfs =(root)=>{
        if(!root){
            return;
        }
        if(map.has(root.val)){
            map.set(root.val,map.get(root.val)+1)
        }else{
            map.set(root.val,1)
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let max=[new Set(),0]
    map.forEach((val,key)=>{
        if(val>max[1]){
            max[0].clear()
            max[0].add(key)
            max[1]=val
        }else if(val===max[1]){
            max[0].add(key)
        }


    })
    return [...max[0]]
};