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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let q= [root]
    let answer=[]
    const bfs=()=>{
        let i=0
        while(q.length){
            let arr=[]
            for(let node of q){
                if(!node){
                    continue
                }
                if(answer[i]===undefined){
                    answer.push(node.val)

                }
                arr.push(node.right,node.left)
            }
            q=arr
            i++
        }
       
    }
    bfs()
    return answer
};