/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left=0
    let right=1
    while(true){
        if(right===nums.length){
            return;
        }
        if(nums[left]!==0){
            left++
            right++
        }else{
            if(nums[right]!==0){
                let tmp= nums[left]
                nums[left]=nums[right]
                nums[right]=tmp
            }else{
                right++
            }
            
        }
    }
};