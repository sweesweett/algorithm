/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a,b)=>a-b)
    return arr1.filter((val)=>binary(val)).length


    function binary(val){
        let left=0
        let right=arr2.length-1
        while(left<=right){
            let middle = Math.floor((left+right)/2)
            if(Math.abs(arr2[middle]-val)<=d){
                return false
            }
            if(arr2[middle]>val){
                right=middle-1
            }
            else{
                left= middle+1
            }
        }
        return true
    }
};