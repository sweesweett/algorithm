/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1)
    let set2= new Set()
    nums2.forEach(el=>{
        if(set.has(el)){
            set2.add(el)
        }

    })

    return [...set2]
};