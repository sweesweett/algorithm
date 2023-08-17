/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num===1){
        return true
    }
    let left=1
    let right=Math.round(num/2)
    while(left<right){
      let middle= Math.floor((left+right)/2)
    
      if(middle*middle===num||left*left===num||right*right===num){
          return true
      }
        if(middle===left||middle===right){
          return false
      }
      if(middle*middle<num){
          left=middle
      }
      if(middle*middle>num){
          right=middle
      }
    }
    return false
};