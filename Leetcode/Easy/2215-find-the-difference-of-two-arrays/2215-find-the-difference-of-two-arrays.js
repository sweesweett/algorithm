/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let aSet= new Set(nums1)
    let bSet= new Set(nums2)
    const findD=(set,comp)=>{
        let compSet= new Set(comp)
        let newArr=[]
        for(let val of set){
            if(!compSet.has(val)){
                newArr.push(val)
            }
        }
        return newArr
    }
    return[findD(aSet,nums2),findD(bSet,nums1)]
};