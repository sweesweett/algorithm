function solution(survey, choices) {
    let answer={R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    let dd=''
 for(let i=0;i<choices.length;i++){
     if(choices[i]-4>0){
         answer[survey[i][1]]+=choices[i]-4
     }else if(choices[i]-4<0){
         answer[survey[i][0]]+=Math.abs(choices[i]-4)
     }
     
 }
    let keys=Object.keys(answer)
    for(let i=0;i<keys.length;i+=2){
        if(answer[keys[i]]>=answer[keys[i+1]]){
        dd+=keys[i]
    }else{
        dd+=keys[i+1]
    }
    }
    
    return dd
}