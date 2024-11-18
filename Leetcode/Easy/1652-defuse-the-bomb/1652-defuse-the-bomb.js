/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let length=code.length;
    if(k===0){
        return new Array(length).fill(0)
    }
    if(k>0){
         return prevKSum(code,k)
    }
    return nextKSum(code,k)
};
function prevKSum(code,k){
    let length=code.length;
    let answer=new Array(length).fill(0);
    let initialSum=code.slice(1,k+1).reduce((a,b)=>a+b);
    answer[0]=initialSum;
    for(let i=1;i<length+k;i++){
        initialSum-=code[i%length];
        initialSum+=code[(k+i)%length];
        answer[i%length]=initialSum;
    }
    return answer
}
function nextKSum(code,k){
    let length= code.length;
    let answer=new Array(length).fill(0);
    let absK=Math.abs(k)
    let initialSum=code.slice(0,absK).reduce((a,b)=>a+b);
    answer[absK]=initialSum;
    for(let i=absK+1;i<length+absK;i++){
        initialSum-=code[(i-absK-1)%length]
        initialSum+=code[(i-1)%length]
        answer[i%length]=initialSum
    }
    return answer
}