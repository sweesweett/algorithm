/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack=[]
    let cir=nums.length
    for(let i =0;i<nums.length;i++){
        let idx=i+1
        while(true){
            if(i===idx%cir){
                stack.push(-1)
                break
            }
            if(nums[idx%cir]>nums[i]){
                stack.push(nums[idx%cir])
                break
            }
            idx++
        }
    }
    return stack
    
};