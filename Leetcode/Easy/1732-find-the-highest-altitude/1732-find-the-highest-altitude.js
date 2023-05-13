/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr= new Array(gain.length).fill(0)
    for(let i=1;i<gain.length+1;i++){
        arr[i]=gain[i-1]+arr[i-1]

    }
    return Math.max(...arr)
    
};