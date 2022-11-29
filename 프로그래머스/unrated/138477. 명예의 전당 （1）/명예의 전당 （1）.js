function solution(k, score) {
    let answer=[]
    let bb= score.slice(0,k).sort((a,b)=>b-a)
    let small =score[0]
    let sum =0
    if(k>score.length){
        for(let i =0;i<score.length;i++){
              if(score[i]<small){
            small = score[i]
        }
        sum+=score[i]
        answer.push(small)
            
        }
        return answer
        
    }
    
    for(let i =0;i<k;i++){
        if(score[i]<small){
            small = score[i]
        }
        sum+=score[i]
        answer.push(small)
    }
    
    for(let i=k;i<score.length;i++){
      if(sum-small+score[i]>sum){
          sum-=small+score[i]
          bb.pop()
          bb.push(score[i])
          bb.sort((a,b)=>b-a)
          small=bb[bb.length-1]
      }
      
         answer.push(small)
    }
    return answer;
}
