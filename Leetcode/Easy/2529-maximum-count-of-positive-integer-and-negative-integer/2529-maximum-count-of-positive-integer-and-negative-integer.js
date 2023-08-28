/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    if(nums.length===1){
        if(nums[0]!==0){
            return 1
        }
        return 0
    }
    let l=0
    let r=nums.length-1
    let max=0
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]<0){
            l=mid+1
        }else{
            r=mid-1
        }

    }

    max=l
    r=nums.length-1
    l=0
    while(l<=r){
         let mid = Math.floor((l+r)/2)
        if(nums[mid]>0){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return Math.max(max,nums.length-l)
}