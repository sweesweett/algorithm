/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let dd=1
    let start=k-1
    let arr=[]
    while(dd<=n){
        arr.push(dd)
        dd++
    }
    let idx=0
    while(arr.length>1){
        if(idx!==start){
            arr.push(arr.shift())
            idx++
        }else if(idx===start){
            arr.shift()
            start+=k-1
        }

    }
    return arr.shift()
};