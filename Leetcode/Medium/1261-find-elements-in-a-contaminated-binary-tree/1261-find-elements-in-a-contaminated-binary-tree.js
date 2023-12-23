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
 */
var FindElements = function(root) {
    this.set= new Set()
    root.val=0
    let stack=[root]
    while(stack.length){
        let node=stack.pop()
        if(!node){
            continue
        }
        this.set.add(node.val)
        if(node.left){
            node.left.val=node.val*2+1
        }
        if(node.right){
            node.right.val=node.val*2+2
        }
        stack.push(node.left,node.right)
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.set.has(target)  
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */