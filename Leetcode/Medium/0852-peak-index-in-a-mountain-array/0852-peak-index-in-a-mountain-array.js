/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l=0
    let r=arr.length-1
    while(l<=r){
        let m= l+Math.floor((r-l)/2)
        if(arr[m+1]<arr[m]&&arr[m-1]<arr[m]){
            return m
        }
        if(arr[m]<arr[m-1]){
            r=m-1

        }else{
            l=m+1
        }

    }
    return l
};