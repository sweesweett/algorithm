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
const dfs=(node,count,max)=>{
    if(!node){
        return
    }
    if(node.val>=max){
        
        count.plus()
        max=node.val
    }
    dfs(node.left,count,max)
    dfs(node.right,count,max)


} 
var goodNodes = function(root) {
    let count= new Count()
    dfs(root,count,-Infinity)
    return count.getValue()
};
function Count(){
    this.val=0
    this.plus=function(){
        this.val+=1
    }
    this.getValue=function(){
        return this.val
    }


}
