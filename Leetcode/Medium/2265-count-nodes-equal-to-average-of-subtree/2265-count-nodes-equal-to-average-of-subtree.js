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
var averageOfSubtree = function(root) {
    let count=0
    const dfs=(root,value,length)=>{
        let l=length
        let v= value
        if(!root){
            return [length,value]
        }
        if(!root.left&&!root.right){
            count++
            return [length+1,value+root.val]
        }
        if(root.left){
            let [leng,val]=dfs(root.left,length,value)
            l+=leng
            v+=val
            
        }
        if(root.right){
            let [leng,val]=dfs(root.right,length,value)
            l+=leng
            v+=val
        }
        l+=1
        v+=root.val
        if(Math.floor(v/l)===root.val){
          
            count++
        }
        return [l,v]
    }
    dfs(root,0,0)
    return count
};