/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for(let el of nums){
        if(map.has(el)){
            return true
        }else{
            map.set(el,1)
        }

    }
    return false
};