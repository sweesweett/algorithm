/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max=0
    const dfs=(root,count)=>{
        if(!root){
            return;
        }
      
        if(!root.children.length){
            max=Math.max(count+1,max)
            return;
        }
        
        for(let val of root.children){
            dfs(val,count+1)
        }
    }
    dfs(root,0)
    return max
};