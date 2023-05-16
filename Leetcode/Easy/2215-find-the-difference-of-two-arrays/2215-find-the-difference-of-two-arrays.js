/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let aSet= new Set(nums1)
    let bSet= new Set(nums2)
    const findD=(set,comp)=>{
        let newArr=[]
        for(let val of set){
            if(!comp.has(val)){
                newArr.push(val)
            }
        }
        return newArr
    }
    return[findD(aSet,bSet),findD(bSet,aSet)]
};