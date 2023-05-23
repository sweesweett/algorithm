/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack=[]
    let arr= new Array(26).fill(0)
    for(let i=0;i<s.length;i++){
        let char= s[i].charCodeAt()-97
        if(stack.length===0){
            stack.push(s[i])
            arr[char]=1
            continue
        }
        let tail= stack[stack.length-1].charCodeAt()-97
        if(tail>char&&s.slice(i+1).indexOf(stack[stack.length-1])>-1&&!arr[char]){
                arr[tail]=0
                stack.pop()
                i--
       
        }else{
            if(!arr[char]){
                stack.push(s[i])
                arr[char]=1
            }
            
        }
    }
   return stack.join('')
};