function solution(n, lost, reserve) {
  let newR=reserve.filter(el=>lost.indexOf(el)===-1).sort((a,b)=>a-b)
let newL= lost.filter(el=>reserve.indexOf(el)===-1).sort((a,b)=>a-b)
 let answer = n-newL.length
 if(answer===n){
     return n
 }
    for(let i=0;i<newL.length;i++){
        let a=newR.indexOf(newL[i]+1)
        let b=newR.indexOf(newL[i]-1)
        if(a>b){
           if(b>-1){
            answer+=1
            newR[b]=-1
        } else if(a>-1){
            answer+=1
            newR[a]=-1
        }
            
        }else{
            if(a>-1){
            answer+=1
            newR[a]=-1
        }else if(b>-1){
            answer+=1
            newR[b]=-1
        }
        
        }
        
    }
    return answer;
}
