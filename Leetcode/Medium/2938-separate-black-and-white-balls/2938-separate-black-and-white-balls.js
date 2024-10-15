/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let arr= s.split('')
    let right=s.length-1
    let total=0
    for(let i=right;i>=0;i--){
        if(arr[i]==='1'){
            total+=(right-i)
            right--
        }
    }
    return total
};