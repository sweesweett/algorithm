/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let right=0
    for(let val of quantities){
        right=Math.max(right,val)
    }
    let left=0
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if(checkedMax(mid,quantities)<=n){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return left
};
function checkedMax(val,quantities){
    let total=0
    for(let p of quantities){
        total+=Math.ceil(p/val)
    }
    return total
}