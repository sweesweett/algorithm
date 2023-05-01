/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n===0){
        return [0]
    }
    let arr=[0,1]
    for(let i=2;i<=n;i++){
        let dd=i
        let count=0
       while(dd>1){
           count+=dd%2

           dd=(dd-dd%2)/2
       }
       if(dd===1){
           count+=1
       }
       arr.push(count)
    }
    return arr
};