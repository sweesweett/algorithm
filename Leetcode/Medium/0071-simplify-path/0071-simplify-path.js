/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr= path.split('/')
    let stack=[]
    for(let val of arr){
        if(val==='..'){
            stack.pop()
        }
        else if(val!==''&&val!=='.'){
            stack.push(val)
        }
    }
    return '/'+stack.join('/')
};