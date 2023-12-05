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
var averageOfLevels = function(root) {
    const ans=[]
    let queue=[root]
    while(queue.length){
        let q2=[]
        let count=0
        let val=0
        for(let q of queue){
            if(q===null){
                continue
            }
            val+=q.val
            count++
            q2.push(q.left,q.right)
        }
        if(count>0){
            ans.push(val/count)
        }
        queue=q2
    }
    return ans
};