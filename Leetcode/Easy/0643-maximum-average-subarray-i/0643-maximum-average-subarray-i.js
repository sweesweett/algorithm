/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(k===1){
        return Math.max(...nums)
    }
    let max=nums.slice(0,k).reduce((a,b)=>a+b)
    let dd=max
    for(let i=k;i<nums.length;i++){
        dd=dd+nums[i]-nums[i-k]
        max=Math.max(max,dd)
    }

    return max/k
};