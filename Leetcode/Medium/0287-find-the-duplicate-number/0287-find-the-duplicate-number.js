/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l=0
    let r=nums.length-1
    while(l<=r){
        let count=0
        let mid = Math.floor((l+r)/2)
        nums.forEach(val=>{
            if(val<=mid){
                count++
            }
        })
        if(count<=mid){
            l=mid+1
        }else{
            r=mid-1
        }
        

    }
    return l
};