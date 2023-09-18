/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[i+1]){
            count++
           
            if(count>2){
                nums.splice(i-(count-2),count-2)
                i-=count-2
            }
            count=0

        }else{
            count++
        }
    }
};