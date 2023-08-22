/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0
    for(val of grid){
        count+=val.length-binaryNegative(val)
    }
    return count

    function binaryNegative(val){
       
        let left =0
        let right=val.length-1
        while(left<=right){
            let middle= Math.floor((left+right)/2)
            if(val[middle]<0){
                right=middle-1
            }else{
                left= middle+1
            }
        }
        return left
    }

};