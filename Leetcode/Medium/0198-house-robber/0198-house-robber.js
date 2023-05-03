/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
 if(nums.length===1){
   return nums[0]
 }
 if(nums.length===2){
    return Math.max(nums[0],nums[1])
 }
 let one=nums[0]
 let two=Math.max(nums[0],nums[1])
 for(let i =2;i<nums.length;i++){
   let max= Math.max(one+nums[i],two)
    one=two
    two=max

 }

    return Math.max(one,two)
}