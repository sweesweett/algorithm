/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let one =nums[0]
    let two=Infinity
    for(let i =1;i<nums.length;i++){
       if(nums[i]<one){
           one=nums[i]
       }
        else if(nums[i] < two && nums[i] > one){
            two=nums[i]
        }
       if(one<two&&two<nums[i]){
           return true
       }
      
       

    }
    return false
};