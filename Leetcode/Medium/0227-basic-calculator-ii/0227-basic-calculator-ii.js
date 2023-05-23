/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num=''
    let stack=[]
    let set = new Set(['*','/','-','+'])
    let curr=''
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])||i===s.length-1){
            if(i===s.length-1){
                num+=s[i]
            }
            let val=Number(num)
             if(curr){
                switch(curr){
                case '+':
                stack.push(val)
                break
                case '-':
                  stack.push(-val)
                break
                case '*':
                stack.push(stack.pop()*val)
                break
                case '/':
                stack.push(Math.trunc(stack.pop()/val))

                }
            }else{
                stack.push(val)
            }
            num=''
            curr=s[i]

           
        
        }else{
            num+=s[i]
        }
    }  
    return stack.reduce((a,b)=>a+b)
};