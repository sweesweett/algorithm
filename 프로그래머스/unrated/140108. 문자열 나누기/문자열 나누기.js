function solution(s) {
   let arr =[]
   let i =1
   let start=0
   let count=1
   let answer=0
    if(s.length===1){
        return 1
    }
    while(true){
        if(i===s.length-1){
            return answer+1
        }
       if(s[i]!==s[start]){
           count--
           if(count===0){
                answer+=1
               start=i+1
           }
       }else{
           count+=1
           
       }
       i++
   }
}