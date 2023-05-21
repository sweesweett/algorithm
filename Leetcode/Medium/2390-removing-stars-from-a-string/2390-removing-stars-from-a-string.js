/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack=[]
    for(let val of s){
        if(val==='*'){
            stack.pop()
        }else{
            stack.push(val)
        }
    }
    return stack.join('')
};