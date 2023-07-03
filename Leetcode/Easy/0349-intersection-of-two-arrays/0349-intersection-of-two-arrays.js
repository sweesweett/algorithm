/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set()
    let arr=[]
    nums1.forEach(el=>set.add(el))
    nums2.forEach(el=>{
        if(set.has(el)){
            arr.push(el)
            set.delete(el)
        }

    })
    return arr
};