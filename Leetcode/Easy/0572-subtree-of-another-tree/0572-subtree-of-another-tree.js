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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const dfs=(root)=>{
        if(!root){
            return false
        }
        if(isSame(root,subRoot)){
            return true
        }
        if(!root.left&&!root.right){
            return false
        }
        return dfs(root.left)||dfs(root.right)
    }
    function isSame(root,subRoot){
        if(!root&&!subRoot){
            return true
        }
        if(!root||!subRoot){
            return false
        }
        if(root.val===subRoot.val){
            return isSame(root.left,subRoot.left)&&isSame(root.right,subRoot.right)
        }else{
            return false
        }


    }

   return dfs(root)
};