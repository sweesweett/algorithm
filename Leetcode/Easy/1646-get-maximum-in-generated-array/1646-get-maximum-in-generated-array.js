/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if(n===0||n===1){
        return n
    }
    let arr=[0,1]
    for(let i =0;i<=n;i++){
        let dd=Math.floor(i/2)
        if(i%2){
            arr[i]=arr[dd]+arr[dd+1]
        }else{
            arr[i]=arr[dd]
        }
    }
    return Math.max(...arr)
};