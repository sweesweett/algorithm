/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let ans=''
    let stack2=[]
 
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack2.push(i)

        }else if(s[i]===')'){
            if(s[stack2.at(-1)]==='('){
              stack2.pop()
            }else{
                 stack2.push(i)

            }
        }
    }
    let idx=0
    for(let i=0;i<s.length;i++){
        if(stack2[idx]===i){
            idx++
        }else{
            ans+=s[i]
        }
    }
    return ans
};