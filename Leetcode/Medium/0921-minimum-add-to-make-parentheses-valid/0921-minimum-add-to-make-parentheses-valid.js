/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack=[]
    let idx=0
    while(idx<s.length){
        if(!stack.length){
            stack.push(s[idx])
        }
        else if(stack.at(-1)==='('&&s[idx]===')'){
            stack.pop()
        }else{
            stack.push(s[idx])
        }
        idx++
    }
    return stack.length
};