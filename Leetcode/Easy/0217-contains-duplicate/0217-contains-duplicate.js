/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={}
    for(let el of nums){
        if(obj[el]){
            return true
        }else{
            obj[el]=1
        }

    }
    return false
};