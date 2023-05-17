/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[]
    for(let val of s){
        if(stack[stack.length-1]===val){
            stack.pop()
        }else{
            stack.push(val)
        }
    }
    return stack.join('')
};