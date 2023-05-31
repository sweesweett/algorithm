/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack=[]
    let arr= Array(25).fill(0)
    let count=1
    for(let val of s){
         if(val===')'){
            stack.pop()
            if(stack.length>1){
                if(arr[stack.length+1]){
                    arr[stack.length]+=arr[stack.length+1]*2
                    arr[stack.length+1]=0
                }else{
                    arr[stack.length]+=count
                    count=1
                }
            }else{
                  if(arr[stack.length+1]){
                    arr[stack.length]+=arr[stack.length+1]*2
                    arr[stack.length+1]=0
                }else{
                    arr[stack.length]+=count
                    count=1
                }
            }
        }else if(val==='('){
            stack.push('(')
        }
    }
    return arr[0]
};