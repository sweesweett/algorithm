/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n<2){
      return n
    }
    for(let i=n,j=0;i>0,j<=n;i--,j++){
      let left=i*(i+1)/2
      let right= (j+1)*(j/2+i)
      if(left===right){
        return i
      }

    }
    return -1
};