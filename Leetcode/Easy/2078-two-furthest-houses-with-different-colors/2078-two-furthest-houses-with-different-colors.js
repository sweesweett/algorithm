/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
 let left= 0
 let right=colors.length-1
 let max=0
 while(true){
    if(left>=right){
        return 0
    }
    if(colors[left]===colors[right]){
       left++
    }else{
        if(right-left>max){
            max=right-left
            break
        }
        left++

    }
 }
 left=0
 right=colors.length-1
 while(left<right){
    if(colors[left]===colors[right]){
       right--
    }else{
        if(right-left>max){
            max=right-left
            break
        }
        right--

    }
 }

 return max
};