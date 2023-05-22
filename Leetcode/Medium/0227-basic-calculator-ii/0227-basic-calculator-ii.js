/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num=''
    let stack=[]
    let set = new Set(['*','/','-','+'])
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])){
            if(num!==''){
                stack.push(Number(num))
            }
            
            num=''
            if(s[i]==='*'||s[i]==='/'){
                let num=''
                let idx=i+1
                while(idx<s.length){
                    if(set.has(s[idx])){
                        break
                    }
                    num+=s[idx]
                    idx++
                }
                let dd=stack.pop()
                if(s[i]==='*'){
                    stack.push(dd*Number(num))
                }else if(s[i]==='/'){
                    stack.push(Math.trunc(dd/Number(num)))
                }
                i=idx-1
            }else{
                stack.push(s[i])
            }
          


        }else if(s[i]!==''){
            num+=s[i]
            if(i===s.length-1){
                stack.push(Number(num))
            }
            
        }
    }
    let stack2=[]
    for(let i=0;i<stack.length;i++){
        if(stack[i]==='+'){
            let dd=stack2.pop()+stack[i+1]
            stack2.push(dd)
            i++
        }else if(stack[i]==='-'){
             let dd=stack2.pop()-stack[i+1]
            stack2.push(dd)
            i++

        }else{
            stack2.push(stack[i])
        }
    }
    return stack2[0]
};