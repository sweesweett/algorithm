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
    let max=[]
    for(let val of nums){
        if(val===1){
            count++
        }else{
            max.push(prev+count)
                prev=count
                count=0
         
        }
    }
    if(count){
        max.push(count+prev)
    }
    if(max[0]===nums.length){
        return nums.length-1
    }
    return max.length===0?0:Math.max(...max)
};