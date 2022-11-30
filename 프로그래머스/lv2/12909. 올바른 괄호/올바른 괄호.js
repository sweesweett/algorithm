function solution(s){
    var answer = true;
    let newS=s
    let dd=''
    let i=0
    while(true){
        if(newS.length===0){
            return true
        }
       if(newS[i]+newS[i+1]==='()'){
               i++
           }
        else{
               dd+=newS[i]+newS[i+1]
            i+=2
           }
        if(i>=newS.length){
            i=0
        }
        if(dd.length===newS.length){
            return false
        }
        newS=dd
    }

    return answer;
}