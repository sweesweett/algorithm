function solution(s) {
    let answer = 0;
    let dd=s
    let count=0
    if(s.length%2){
        return 0
    }
    while(true){
        if(count===s.length){
            return answer
        }
        answer+=aa(dd)
        dd=dd.slice(1)+dd[0]
        count++
    }
    return answer
}
function aa(dd){
    let stack=[]
    let ss={
         '{': '}',
        '[': ']',
        '(': ')',
    }
    for(let i =0;i<dd.length;i++){
        if(ss[dd[i]]!==undefined){
            stack.push(dd[i])
        }else{
            if(ss[stack[stack.length-1]]!==dd[i]){
                return 0
            }else{
                stack.pop()
            }
            
        }
    }
    return 1
}

   