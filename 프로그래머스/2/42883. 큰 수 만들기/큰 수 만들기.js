function solution(number, k) {
    const stack=[]
    let count=k
    let ans=[]
    for(let i=0;i<number.length;i++){
        if(i===0){
            stack.push(number[i])
            continue
        }
        while(count>0){
        if(stack.at(-1)<number[i]&&count>0){
            stack.pop() 
            count--
        }else{
            break
        }
        }    
        stack.push(number[i])
    }
    if(stack.length===number.length){
        return stack.slice(0,-k).join('')
    }
    return stack.join('')
}