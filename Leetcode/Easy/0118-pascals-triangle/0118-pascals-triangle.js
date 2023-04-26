/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr=[[1],[1,1]]
    if(numRows===1){
        return [[1]]
    }
    let idx=1
    while(idx<numRows-1){
        let pushArr=[1]
        for(let i=0;i<arr[idx].length-1;i++){
            pushArr.push(arr[idx][i]+arr[idx][i+1])
        }
        pushArr.push(1)
        arr.push(pushArr)
        idx++

    }
    return arr

};