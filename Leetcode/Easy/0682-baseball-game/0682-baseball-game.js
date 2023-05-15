/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack=[]
    let idx=0
    while(idx<operations.length){
        let val=operations[idx]
        if(!isNaN(Number(val))){
            stack.push(Number(val))

        }else if(val==="C"){
            stack.pop()
        }else if(val==='D'){
            stack.push(Number(stack[stack.length-1]*2))
        }else{
           stack.push(stack[stack.length-2]+stack[stack.length-1])

        }

        idx++
    }
    return stack.reduce((a,b)=>a+b,0)
};