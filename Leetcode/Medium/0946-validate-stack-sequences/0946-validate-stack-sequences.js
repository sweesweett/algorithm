/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let idx=1
    let idx2=0
    let stack=[pushed[0]]
    while(idx<=pushed.length&&idx2<popped.length){
        if(stack.at(-1)===popped[idx2]){
            stack.pop()
            idx2++
        }else if(pushed[idx]===undefined){
            return false
        }else{
            stack.push(pushed[idx])
            idx++
        }
    }
    return true
};