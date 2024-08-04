function solution(progresses, speeds) {
    let ans=[]
    let queue=[...progresses]
    let combine;
    let count=0
    while(queue.length){
        let q=queue.shift()
        let time=speeds.shift()
        let totalTime=Math.ceil((100-q)/time)
        if(combine===undefined){
            combine=totalTime
            count++
            continue
        }
        if(totalTime>combine){
            ans.push(count)
            count=1
            combine=totalTime
        }else{
            count++
        }
    }
    ans.push(count)
    return ans
} 