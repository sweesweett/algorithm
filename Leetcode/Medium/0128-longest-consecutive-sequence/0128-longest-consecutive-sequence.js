/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length){
        return 0
    }
    if(nums.length===1){
        return 1
    }
    nums.sort((a,b)=>a-b)
    let max=1
    let start=1
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]-nums[i-1]===1){
            start++
            max= Math.max(max,start)
        }
        else if(nums[i]===nums[i-1]){
            continue
        }            
        else{
           
           start=1
        }
    }
    return max
};