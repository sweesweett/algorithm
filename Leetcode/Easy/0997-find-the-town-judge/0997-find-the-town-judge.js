/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let arr= Array.from(new Array(n),()=>[0,0])
    for(let [l,r] of trust){
        arr[l-1][1]=1
        arr[r-1][0]+=1
    }
    for(let i=0;i<arr.length;i++){
        let [l,r]= arr[i]
        if(l===n-1&&r!==1){
            return i+1
        }
    }
    return -1
};