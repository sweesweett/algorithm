/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max=0
    let stack=[]
    for(let val of s){
        if(val==='('){
            stack.push('(')
        }else if(val===')'){
            max=Math.max(max,stack.length)
            stack.pop()
        }
    }
    return max
};