/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let stack=[p]
    let stack2=[q]
    while(stack.length&&stack2.length){
        let one = stack.pop()
        let two = stack2.pop()
        if(one===null&&two===null){
            continue
        }
        if(one===null||two===null){
          return false
        }
        if(one.val!==two.val){
            return false
        }
        stack.push(one.left,one.right)
        stack2.push(two.left,two.right)
    }
    if(stack.length!==stack2.length){
        return false
    }
    return true
};