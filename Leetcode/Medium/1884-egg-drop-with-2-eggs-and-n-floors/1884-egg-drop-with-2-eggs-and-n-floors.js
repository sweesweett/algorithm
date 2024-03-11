/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  if(n<2){
    return n
  }
  let start=2
  let num=2
  while(num<n){
    if(num+start>n){
      return start
    }
    num+=start
    start++
  }
  return start
};