/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let arr=[...s]
    let stack=[]
    while(true){
    let isremoved=false
    for(let i=0;i<arr.length;i++){
        if(!stack.length){
            stack.push(arr[i])
            continue
        }
        if(stack.at(-1)+arr[i]==='()'){
            stack.pop()
            isremoved=true
        }else{
            stack.push(arr[i])
        }
    }
    arr=[...stack]
    stack=[]
    if(!isremoved){
        break
    }
 
    }
    return arr.length
};