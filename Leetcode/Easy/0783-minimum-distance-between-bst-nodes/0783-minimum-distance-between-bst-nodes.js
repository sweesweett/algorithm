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
var minDiffInBST = function(root) {
    let arr=[]
    let stack=[root]
    while(stack.length){
        let node= stack.pop()
        if(node===null){
            continue
        }
        arr.push(node.val)
        stack.push(node.left,node.right)
    }
    arr.sort((a,b)=>a-b)
    let min=arr[1]-arr[0]
    for(let i =2;i<arr.length;i++){
      min=Math.min(min,arr[i]-arr[i-1])
    }
    return min
};