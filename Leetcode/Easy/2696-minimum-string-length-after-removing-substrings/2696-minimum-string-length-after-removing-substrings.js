/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        if(stack.at(-1)==='A'&&s[i]==='B'){
            stack.pop()
        }else if (stack.at(-1)==='C'&&s[i]==='D'){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.length
};