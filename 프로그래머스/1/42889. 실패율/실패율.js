function solution(N, stages) {
    let total=stages.length
    let stageArr= new Array(N+2).fill(0)
    let failArr= new Array(N+2).fill(0)
    let ans=Array.from({length:N},(_,i)=>i+1)
    let obj={}
    failArr[0]=total
    for(let i=0;i<total;i++){
       stageArr[stages[i]]+=1
    }
    for(let i=1;i<stageArr.length;i++){
        failArr[i]=failArr[i-1]-stageArr[i-1]
        obj[i]=stageArr[i]/failArr[i]
    }

    ans.sort((a,b)=>obj[b]-obj[a])
    return ans
   
}