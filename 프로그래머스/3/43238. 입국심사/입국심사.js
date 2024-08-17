function solution(n, times) {
    times.sort((a,b)=>a-b)
    let left=times[0]
    let right=times[0]*n
    while(left<right){
        let mid=Math.floor((left+right)/2)
        let total=0
        for(let time of times){
            if(total>=n){
                break
            }
            
            total+=Math.floor(mid/time)
        }
        if(total>=n){
            right=mid
        }else{
            left=mid+1
        }
    }
    return left
}