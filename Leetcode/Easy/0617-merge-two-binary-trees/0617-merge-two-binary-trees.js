/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) { 
    if(!root1) return root2
    if(!root2) return root1
    let ans= root1
    let queue=[[ans,root2]]
    while(queue.length){
        let [r1,r2]= queue.shift()
        r1.val+=r2.val
        if(r1.left&&r2.left){
            queue.push([r1.left,r2.left])
        }else if(!r1.left){
            r1.left=r2.left
        }
        if(r1.right&&r2.right){
            queue.push([r1.right,r2.right])
        }else if(!r1.right){
            r1.right=r2.right
        }


    }
    return ans

}