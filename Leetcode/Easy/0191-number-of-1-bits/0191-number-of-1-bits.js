/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  let num=n
  let ans=0
  while(num>0){
      ans+=num&1
      num=num>>1
  }
  return ans
};