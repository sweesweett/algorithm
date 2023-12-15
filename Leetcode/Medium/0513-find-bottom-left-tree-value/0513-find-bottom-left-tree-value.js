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
var findBottomLeftValue = function(root) {
    let queue=[[0,root]]
    let arr=[]
    let start;
    while(queue.length){
        let [depth,node]= queue.shift()
        if(!node){
            continue
        }
        if(start!==depth){
            arr.push(node.val)
            start=depth
        }
        queue.push([depth+1,node.left],[depth+1,node.right])
    }
    return arr.at(-1)
};