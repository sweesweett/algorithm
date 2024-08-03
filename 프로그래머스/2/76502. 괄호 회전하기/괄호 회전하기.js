function solution(s) {
    let count = 0;
    let ss={
         '{': '}',
        '[': ']',
        '(': ')',
    }
    for(let i=0;i<s.length;i++){
        let stack=[]
        let isCompleted=true
        for(let j=i;j<s.length+i;j++){
            let val=s[j%s.length]
          
            if(val in ss){
                stack.push(val)
            }else{
              if(ss[stack.at(-1)]===val)  {
                  stack.pop()
              }else{
                  isCompleted=false
                  break
              }
                
            }
            
        }
        if(!stack.length&&isCompleted){
            count++
        }
    }
    return count
}

   