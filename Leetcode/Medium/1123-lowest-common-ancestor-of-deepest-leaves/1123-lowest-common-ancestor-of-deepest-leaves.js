
const lcaDeepestLeaves = (root) => {
let max=0;
const dfs2=(root,level)=>{
    if(!root) return null
    max= Math.max(level,max)
    dfs2(root.left,level+1)
    dfs2(root.right,level+1)
}
 const dfs = (root, level) => {
    if (!root) return null;
    if (level == max) return root; 
    let left = dfs(root.left, level + 1);
    let right = dfs(root.right, level + 1);
    if(left&&right){
        return root
    }else if(right){
        return right
    }else{
        return left
    }
 
};   

    dfs2(root,0)
    return dfs(root, 0);
};


