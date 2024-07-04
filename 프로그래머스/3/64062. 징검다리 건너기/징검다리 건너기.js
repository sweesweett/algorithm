function solution(stones, k) {
    let left=1
    let right=0
    for(let val of stones){
        right= Math.max(right,val)
    }
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(canCross(k,mid,stones)){
            left=mid+1
        }else{
            right=mid-1
        }
        
        
    }
    return left
}
function canCross(k,mid,stones){
    let count=0
    for(let val of stones){
        if(val-mid<=0){
            count++
             if(count>=k){
                return false
                }
        }else{
            count=0
        }
       
    }
    return true
    
    
}


