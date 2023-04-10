/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    const ttt= arr[1]-arr[0]
    for(let i =0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i]>ttt||arr[i+1]-arr[i]<ttt){

            return false
        }
    }
    return true
    
};