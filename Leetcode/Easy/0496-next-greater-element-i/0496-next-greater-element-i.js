/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let idx=0
    let arr=[]
    while(idx<nums1.length){
        arr.push(nums2.indexOf(nums1[idx]))
        idx++
    }
    function isNext(start){
     for(let i =start+1;i<nums2.length;i++){
        if(nums2[start]<nums2[i]){
            return nums2[i]
         }

        }
        return -1

    }

    
    return arr.map(el=>isNext(el))
};

