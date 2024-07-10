/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let q=Math.floor(time/(n-1))
    if(q%2===0){
      return time%(n-1)+1
    }
    else{
      return n-(time)%(n-1) 
    }
};