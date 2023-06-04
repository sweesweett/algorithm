var removeKdigits = function(num, k) {
    let kk=0
    let stack=[]
    for(let val of num){
        while(stack.length&&val<stack.at(-1)&&kk<k){
            stack.pop()
            kk+=1
        }
        stack.push(val)
    }
    while(kk<k){
        stack.pop()
        kk+=1
    }
    let dd=0
    while(stack[dd]==='0'){
        dd++
    }
    return stack.slice(dd).join('')||'0'
    
};