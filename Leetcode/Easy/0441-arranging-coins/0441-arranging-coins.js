/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n===1){
        return 1
    }
    let num=1
    while(true){
        if(num*(num+1)/2>n){
            return num-1
        }
       num++
    }
};