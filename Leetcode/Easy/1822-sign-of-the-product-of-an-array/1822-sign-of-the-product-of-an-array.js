/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const val = nums.reduce((a,b)=>a*b,1)
    return signFunc(val)
};
function signFunc(val){
    if(val>0){
        return 1
    }else if(val<0){
        return -1
    }else{
        return 0
    }

}