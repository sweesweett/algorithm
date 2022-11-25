function solution(k, m, score) {
   let arr=[...score]
    let length=0
    let answer=0
     arr.sort((a,b)=>a-b)
    for(let i=arr.length-1;i>=0;i--){
        length++
        if(length===m){
          answer+=arr[i]*length
          length=0
      }
        
    }
    return answer
}