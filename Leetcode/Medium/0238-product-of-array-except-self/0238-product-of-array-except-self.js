/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeros=[]
    let multiple=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeros.push(i)
        }else{
            multiple*=nums[i]
        }
    }
    if(zeros.length===nums.length){
        return nums
    }
    let i=0
    while(i<nums.length){
        if(nums[i]===0){
            if(zeros.length<=1){
                nums[i]=multiple
            }else{
                nums[i]=0
               
                
            }
            
        }else{
            if(zeros.length===0){
                nums[i]=multiple/nums[i]
            }else{
                nums[i]=0
            }

        }
        i++
    }
    return nums
};