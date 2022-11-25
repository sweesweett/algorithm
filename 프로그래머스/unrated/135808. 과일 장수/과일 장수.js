function solution(k, m, score) {
   let arr=[...score]
    let length=0
    let sum=[]
    let answer=0
     arr.sort((a,b)=>a-b)
    for(let i=arr.length-1;i>=0;i--){
        sum.push(arr[i])
        length++
        if(length===m){
          answer+=sum[sum.length-1]*sum.length
          length=0
          sum=[]
      }
        
    }
    return answer
}