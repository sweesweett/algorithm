/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0
    let j=0
    let arr=[]
    while(nums1[i]!==undefined&&nums2[j]!==undefined){
      if(nums1[i]<=nums2[j]){
        arr.push(nums1[i++])
      }else{
        arr.push(nums2[j++])
      }

    }
    if(nums1[i]!==undefined){
      arr.push(...nums1.slice(i))
    }
    else if(nums2[j]!==undefined){
      arr.push(...nums2.slice(j))
    }
    let mid=Math.floor(arr.length/2)
    if(arr.length%2){
      return arr[mid]
    }else{
      return (arr[mid]+ arr[mid-1])/2
    }
};