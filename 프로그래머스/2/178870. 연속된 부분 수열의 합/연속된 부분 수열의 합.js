function solution(sequence, k) {
    let sumArr= [0]
    let length=sequence.length
    let answer=[]
    for(let i=0;i<sequence.length;i++){
        sumArr[i+1]=sumArr[i]+sequence[i]
    }
   
    let left = 0
    let right = 0
    
    while(left<=right){
        let result = sumArr[right]-sumArr[left]
        if(result===k){
            let sum= right-left-1
            if(length>sum){
                length=sum
                answer=[left,right-1]
            }
            
            
        }
        if(result<k){
           right++
        }else{
           left++
        }
        
        
        
        
    }
    return answer.length?answer:[-1,-1]
}