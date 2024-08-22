/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let arr=[0,0,2,3]
    for(let i=4;i<=n;i++){
        arr[i]=findAns(i,arr)
    }
    return arr[n]
};
function findAns(n,arr){
    if(n===2||n===3){
        return n
    }
    let min;

    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            if(!min){
                min=Math.floor(n/i)+arr[i]
                continue
            }
            if(!arr[i]){
                break
            }else{
                min=Math.min(min,Math.floor(n/i)+arr[i])
            }
        }
    }
    return min||n
}