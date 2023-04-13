/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max=0
    let left=0
    for(let i=1;i<nums.length;i++){
        if(nums[left]<nums[i]){
            if(nums[i]-nums[left]>max){
                max=nums[i]-nums[left]
            }
        }else{
            left=i
        }

    }
    return max===0?-1:max
};