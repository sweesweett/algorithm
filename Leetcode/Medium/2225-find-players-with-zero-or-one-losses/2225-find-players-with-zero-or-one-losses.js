/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let arr=[]
    for(let [win,lose] of matches){
        if(arr[win]===undefined){
            arr[win]=0
        }
        arr[lose]=(arr[lose]??0)+1
        
    }
    let answer=[[],[]]
    for(let i=1;i<arr.length;i++){
        if(arr[i]===0){
            answer[0].push(i)
        }else if(arr[i]===1){
            answer[1].push(i)
        }
    }
    return answer
};