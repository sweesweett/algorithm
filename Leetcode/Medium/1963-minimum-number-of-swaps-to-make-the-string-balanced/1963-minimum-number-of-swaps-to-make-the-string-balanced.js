/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stack=[]
    for(let val of s){
        if(stack.at(-1)==='['&&val===']'){
            stack.pop()
        }else{
            stack.push(val)
        }
    }
    if(!stack.length){
        return 0
    }
    let count=0
    let left=0
    let right= stack.length-1
    while(left<right){
        if(stack[left]===']'&&stack[right]==='['){
            stack[left]='['
            stack[right]=']'
            count++
            left++
            right--
            if(stack[left-1]+stack[left]==='[]'){
                left++
            }
            if(stack[right]+stack[right+1]==='[]'){
                right--
            }
        }else if(stack[left]===']'){
            right--
        }else if(stack[right]==='['){
            left++
        }else{
            left++
            right--
        }

    }
    return count
};