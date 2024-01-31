/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let arr= new Array(edges.length+1).fill(0)
    for(let [l,r] of edges){
        arr[l-1]+=1
        arr[r-1]+=1
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===edges.length){
            return i+1
        }
    }
    return -1
};