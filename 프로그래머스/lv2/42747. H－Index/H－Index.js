function solution(citations) {
    // 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면
    //h의 최댓값이 이 과학자의 H-Index입니다.
    
    if(citations.length===1&&citations[0]<=0){
        
        return 0
    }
    citations.sort((a,b)=>b-a)
    let answer=0
    for(let i =0;i<citations.length;i++){
        if(citations.length-i<=citations[i]&&i+1<=citations[i]){
            answer++
        }
        
    }
    return answer
}

