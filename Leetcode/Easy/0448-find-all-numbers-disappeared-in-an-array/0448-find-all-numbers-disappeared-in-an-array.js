/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set=new Set(nums)
    let set2= new Set()
    for(let i=1;i<=nums.length;i++){
        if(!set.has(i)){
            set2.add(i)
        }
    }
    return [...set2]
};