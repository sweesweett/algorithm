function solution(n, works) {
    let newArr=[...works]
    let k=n
    let start=0
    newArr.sort((a,b)=>b-a)
    while(k>0&&newArr.at(-1)!==0){
       for(let i=start;i<newArr.length;i++){
           if(k===0){
               break
           }
           if(i===newArr.length-1){
               newArr[i]-=1
               k-=1
               break
           }
           if(newArr[i]>=newArr[i+1]){
               newArr[i]-=1
               if(newArr[i]===0){
                   start=i
               }
               k-=1
               if(newArr[i]>=newArr[i+1]){
                   break
               }
               
           }
       }
   }
    
    return newArr.map(el=>el**2).reduce((a,b)=>a+b,0)
    
}