function solution(diffs, times, limit) {
    
    let left=1
    let right=0
    diffs.forEach((el)=>{
        right=Math.max(right,el)
    })
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if(calculateNum(diffs,times,mid)<=limit){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return left
    var answer = 0;
    return answer;
}
function calculateNum(diffs,times,level){
    let time=0
    for(let i=0;i<times.length;i++){
        if(i===0||level>=diffs[i]){
            time+= times[i]
            continue
        }
        time+=(diffs[i]-level)*(times[i-1]+times[i])+times[i]
    }
    return time
}