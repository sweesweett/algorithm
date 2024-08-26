/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans=[]
    let dfs=(node)=>{
        let arr=[]
        if(!node){
            return arr
        }
        for(let child of node.children){
            arr.push(...dfs(child))
        }
        arr.push(node.val)
        return arr
    }
   return dfs(root)
};