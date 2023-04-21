/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let tt=[true,true]
    for(let i =0;i<nums.length-1;i++){
        let pp=nums[i+1]-nums[i]
        if(pp<0){
            tt[0]=false
            break
        }
        
    }
    for(let i =0;i<nums.length-1;i++){
        let pp=nums[i+1]-nums[i]
        if(pp>0){
            tt[1]=false
            break
        }
     
        
    }
    return tt[0]||tt[1]
};