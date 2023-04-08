/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
   const lowNum=Math.floor(low/2)+low%2
   const highNum= Math.floor(high/2)+high%2
   if(low%2&&high%2===0){
       return highNum-lowNum+1
   }else if(low%2&&high%2){
       return highNum-lowNum+1
   }
   return highNum-lowNum
};