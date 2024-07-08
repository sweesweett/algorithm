var numWaterBottles = function(numBottles, numExchange) {
    let init= numBottles
    let minus=numExchange
    let ans=init
    while(init>=1){
      let tmp=init-minus
      if(tmp>=0){
        ans+=1
        init=tmp+1
      }else{
        break
      }
    }
    return ans
};