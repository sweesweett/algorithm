/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    for(let num1 of nums1){
        if(num1<nums2[0]){
            continue
        }
        let l= 0
        let r=nums2.length
        while(l<=r){
            let m= Math.floor((l+r)/2)
            if(nums2[m]===num1){
                return num1
            }
            else if(nums2[m]>num1){
                r=m-1
            }else{
                l=m+1
            }
        }
    }
    return -1
};