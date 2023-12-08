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
    if(!root){
        return 0
    }
    let queue=[root]
    let depth=1
    while(queue.length){
        let queue2=[]
        for(let q of queue){
            if(q===null){
                continue
            }
            let {children}=q
            if(children.length){
                 queue2.push(...children)
            }
           
        }
        if(queue2.length){
             depth++
        }
       
        queue=queue2
    }
    return depth
};