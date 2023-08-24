/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let left= 0
    let right=arr.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]-(middle+1)>=k){
            right=middle-1
        }else{
            left= middle+1
        }

    }
    return left + k
};