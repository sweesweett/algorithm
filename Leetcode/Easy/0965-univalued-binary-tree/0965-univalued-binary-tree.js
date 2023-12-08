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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let stack=[root]
    let set=new Set()
    while(stack.length){
        let val=stack.pop()
            if(val===null){
                continue
            }
            if(set.size===0){
                set.add(val.val)
                stack.push(val.left,val.right)
                continue
            }
            if(set.has(val.val)){
                 stack.push(val.left,val.right)

            }else{
                return false
            }

      
    }
    return true
};