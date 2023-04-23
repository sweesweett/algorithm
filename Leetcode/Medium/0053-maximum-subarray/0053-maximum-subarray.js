/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dd=[nums[0],nums[0]]
    for(let i =1;i<nums.length;i++){
        dd[0]=Math.max(dd[0]+nums[i],nums[i])
        dd[1]=Math.max(dd[1],dd[0])
    }
    return dd[1]
};