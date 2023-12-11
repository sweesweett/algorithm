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
var isSymmetric = function(root) {
    
    
    let s1=[root.left]
    let s2=[root.right]
    while(s1.length&&s2.length){
        let one=s1.pop()
        let two=s2.pop()
     
        if(!one&&!two){
          continue
        }
        if(!one||!two||one.val!==two.val){
            return false
        }
        s1.push(one.left,one.right)
        s2.push(two.right,two.left)
        
    }
    return true
    
    
};