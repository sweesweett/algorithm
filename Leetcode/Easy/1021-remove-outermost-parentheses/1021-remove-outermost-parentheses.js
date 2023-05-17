var removeOuterParentheses = function(s) {
    let ans=''
    let stack=[]
    let isOpen=false
    for(let val of s){
        if(val==='('&&!isOpen){
            isOpen=true
        }
        else if(val==='('&&isOpen){
            stack.push('(')
            ans+=val
        }else if(val===')'&&stack.length){
            stack.pop()
            ans+=')'

        }else if(val===')'&&!stack.length){
            isOpen=false
        }

    }
    return ans
};