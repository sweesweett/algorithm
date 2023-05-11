/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // nums.sort((a,b)=>a-b)
    let obj={}
    let count=0
    for(let i =0;i<nums.length;i++){
        if(obj[nums[i]]>0){
            count+=1
            obj[nums[i]]-=1
        }else{
            if(k>nums[i]){
                if(obj[k-nums[i]]){
                    obj[k-nums[i]]+=1
                }else{
                     obj[k-nums[i]]=1
                }
               
            }
            
        }
    }
    return count
};