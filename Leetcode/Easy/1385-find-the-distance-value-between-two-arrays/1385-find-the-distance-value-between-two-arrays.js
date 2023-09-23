/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a,b)=>a-b)
    let count=0
    for(let val of arr1){
        let left=0
        let right=arr2.length-1
        let isTrue=true
        while(left<=right){
            let middle = Math.floor((left+right)/2)
            if(Math.abs(arr2[middle]-val)<=d){
                isTrue= false
                break
            }
            if(arr2[middle]>val){
                right=middle-1
            }
            else{
                left= middle+1
            }
        }
        if(isTrue){
            count++
        }
            
    }
    return count
   
};