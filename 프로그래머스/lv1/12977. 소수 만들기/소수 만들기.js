function solution(nums) {
    let count=0
    let arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
        for(let k=j+1;k<nums.length;k++){
            let num=nums[i]+nums[j]+nums[k]
        
            if(num%2&&num%3){
               arr.push(num)
                
            }
            
        }    
        
        }
    }
    for(let i=0;i<arr.length;i++){
        if(ll(arr[i])){
            count++
        }
        
    }
    
    return count
}
function ll(num){
    for(let i=3;i<=num**0.5;i++){
        if(num%i===0){
            return false
        }
    }
    return true    
}
