/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let dfs=(arr)=>{
        let stack=[]
        let idx=0
        while(idx<s.length){
            if(arr[idx]==='['){
                let [i,val]=dfs(arr.slice(idx+1))
                if(!isNaN(Number(stack.at(-1)))){
                   stack.push(val.repeat(stack.pop()))
                }else{
                    stack.push(stack.pop()+val)
                }
                idx+=i
            }else if(arr[idx]===']'){
                return [idx+1,stack.join('')]

            }else if(!isNaN(Number(stack.at(-1)+arr[idx]))){
                stack.push(stack.pop()+arr[idx])
            }else{
                stack.push(arr[idx])
            }
            idx++        
        }
        return [idx,stack.join('')]
    }
    return dfs(s)[1]
    
   
};