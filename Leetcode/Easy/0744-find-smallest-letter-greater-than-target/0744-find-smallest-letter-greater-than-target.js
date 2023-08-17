/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left= 0
    let right = letters.length-1
    if(letters[0]>target||letters[ letters.length-1]<=target){
        return letters[0]
    }
    while(left<right){
        let middle=Math.floor((left+right)/2)
        if(letters[middle]>target){
            right= middle
        }
        if(letters[middle]<=target){
            left=middle+1
        }
     
    }
    return letters[left]
};