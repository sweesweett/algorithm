/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length<=4){
      return 0
    }
    nums.sort((a,b)=>a-b)
    let difference=nums.length-4
    let min
    for(let i=0;i<nums.length-difference;i++){
      if(!min||min>nums[i+difference]-nums[i]){
        min=nums[i+difference]-nums[i]
      }

    }
    return min
};