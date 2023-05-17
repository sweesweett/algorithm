/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack=[]
    for(let val of logs){
        if(val==='../'){
            stack.pop()
        }else if(val==='./'){
            continue
        }else{
            stack.push(val)
        }


    }
    return stack.length
};