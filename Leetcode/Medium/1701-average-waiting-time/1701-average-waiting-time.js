/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let last=customers[0][0]
  let sum=0
  for(let [start,end] of customers){
    if(last<=start){
      sum+=end
      last=start+end
    }else{
      sum+=last+end-start
      last+=end
    }
  }
  return sum/customers.length
};