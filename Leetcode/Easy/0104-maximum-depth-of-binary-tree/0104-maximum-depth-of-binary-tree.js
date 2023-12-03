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
  let queue=[[root,1]]
  while(queue.length){
      let [r,depth]=queue.shift()
      if(r.left&&r.right){
          queue.push([r.left,depth+1],[r.right,depth+1])
      }else if(r.right){
          queue.push([r.right,depth+1])
      }else if(r.left){
          queue.push([r.left,depth+1])
      }
    if(!queue.length){
        return depth
    }    

  }

};
