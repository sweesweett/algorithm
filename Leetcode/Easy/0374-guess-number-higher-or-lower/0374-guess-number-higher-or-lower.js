/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let  left= 1
    let right= n
    while(left<right){
        let middle= Math.round((right+left)/2)
        let leftVal= guess(left)
        let middleVal=guess(middle)
        let rightVal=guess(right)
        if(!leftVal){
            return left
        }
        if(!middleVal){
            return middle
        }
        if(!rightVal){
            return right
        }
        if(middleVal===1){
            left=middle+1

        }
        if(middleVal===-1){
            right=middle-1
        }

    }
    return left
};