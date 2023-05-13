/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if(nums.length===1){
        return 0
    }
    let count=0
    let prev=0
    let max=0
    for(let val of nums){
        if(val===1){
            count++
        }else{
                max=Math.max(max,prev+count)
                prev=count
                count=0
         
        }
    }
    max=Math.max(prev+count,max)
    if(max===nums.length){
        return nums.length-1
    }
    return max
};