function solution(diffs, times, limit) {
    //퍼즐의 난이도 diff 현재 퍼즐 소요시간 time_cur,이전퍼즐의 소요시간,time_prev, 숙련도 level
    //diff ≤ level이면 퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용하여 해결합니다.
    //diff > level이면, 퍼즐을 총 diff - level번 틀립니다. 퍼즐을 틀릴 때마다,
    //time_cur만큼의 시간을 사용하며, 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 합니다.
    //이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다. 
    //diff - level번 틀린 이후에 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용하여 퍼즐을 해결합니다.
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