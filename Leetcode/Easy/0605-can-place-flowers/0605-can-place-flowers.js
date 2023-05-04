/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let current=flowerbed.indexOf(1)
    let num=n
    if(num===0){
        return true
    }
    if(current>1||current===-1){
        flowerbed[0]=1
        current=0
        num-=1
       
    }
    for(let i=current+1;i<flowerbed.length;i++){
        if(num===0){
            return true
        }
        if(flowerbed[i]===1){
            if(flowerbed[i]===1){
                if((i-current-1)%2&&Math.floor((i-current-1)/2)>=1){
                num-=Math.floor((i-current-1)/2)
                 }
                else if(Math.floor((i-current-1)/2)>=1){
                     num-=Math.floor((i-current-1)/2)-1

                }
                current=i
            }

        }
        if(i===flowerbed.length-1&&flowerbed[i]===0){
            if(Math.floor((i-current)/2)>=1){
             num-=Math.floor((i-current)/2)
            }
        }
      
    }
    if(num>0){
        return false
    }
  

    return true
};