/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        let left=0
        let right=arr.length-1
        let val=arr[i]*2
        while(left<=right){
            let mid= Math.floor((left+right)/2)
            if(arr[mid]===val&&mid!==i){
                return true
            }
            if(arr[mid]>val){
                right=mid-1
            }else{
                left=mid+1
            }
        }
        if(arr[left]===arr[i]*2&&left!==i){
            return true
        }
    }

    return false
};