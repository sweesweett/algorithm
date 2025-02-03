/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc=1
    let dec=1
    let max=1
    for(let i=1;i<nums.length;i++){
       
        if(nums[i-1]<nums[i]){
            inc++
            dec=1
        }else if(nums[i-1]>nums[i]){
            dec++
            inc=1
        }else{
            dec=1
            inc=1
        }
         max=Math.max(inc,dec,max)
    }
    return max
};