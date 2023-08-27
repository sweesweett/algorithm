/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0||x===1){
        return x
    }
    let left=1
    let right=parseInt(x/2)
    while(left<=right){
        let mid =left+ parseInt((right-left)/2)
        let val =mid*mid
        if(x===val){
            return mid
        }
        else if(val<x){
            left=mid+1
        }else{
            right=mid-1
        }
    }

    return left-1
};