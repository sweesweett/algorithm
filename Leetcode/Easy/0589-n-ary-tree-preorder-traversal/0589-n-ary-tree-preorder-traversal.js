/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {

if(!root){
    return []
}else{
 return [root.val, ...recursion(root.children)]
}  
    
};
function recursion(tree){
    let subTree=[]
    let idx=0
    if(!tree){
        return []
    }
    while(true){
     
        if(idx===tree.length){
            return subTree
        }
        subTree.push(tree[idx].val)
        if(tree[idx].children!==undefined){
            subTree.push(...recursion(tree[idx].children))
        }
        idx++
    }

}
