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
var maxDepth = function(root) {
  if(!root){
      return 0
  }  
  let queue=[root]
  let depth=0
  while(queue.length){
    let queue2=[]
    for(let val of queue){
        if(val.left&&val.right){
          queue2.push(val.left,val.right)
        }else if (val.left){
          queue2.push(val.left)
        }else if(val.right){
          queue2.push(val.right)
        }
        
    }
    depth++
    queue=queue2

  }
    return depth
};
