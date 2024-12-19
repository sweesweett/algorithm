function solution(scores) {
    var answer = 0;
    let me=scores[0]
    scores.sort((a,b)=>{
        return (b[0]+b[1])-(a[0]+a[1])
    })
    let minus=0
    let rank=1
    let prev=null
    for(let i=0;i<scores.length;i++){
        let isValid=true
        for(let j=0;j<i;j++){
          if(scores[j][0]>scores[i][0]&&scores[j][1]>scores[i][1]){
              if(scores[i][0]===me[0]&&scores[i][1]===me[1]){
                  return -1
              }
              isValid=false
              minus++
              break
          }  
        }
        if(!isValid){
            continue
        }
        if(prev===null){
            prev=scores[i][0]+scores[i][1]
        }
        if(prev!==scores[i][0]+scores[i][1]){
            rank=i+1-minus
        }
       if(scores[i][0]===me[0]&&scores[i][1]===me[1]){
                  return rank
       }
        
    }

}