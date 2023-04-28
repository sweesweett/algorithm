/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let obj={}
  const dfs=(root,num)=>{
    if(!root){
      return;
    }
    if(obj[num]){
      obj[num]=[...obj[num],root]
    }else{
     obj[num]=[root]
    }
    
    dfs(root.left,num+1)
    dfs(root.right,num+1)
  }

  const dfs2=(root,num)=>{
    const dd= obj[num]
    const ddd=(root,val)=>{
      root.next=val
     }
    if(!dd){
      return;
    }
    for(let i=1;i<dd.length;i++){
       ddd(dd[i-1],dd[i])
    }
    dfs2(root.left,num+1)
  }
  dfs(root,0)
  dfs2(root,0)

  return root
};