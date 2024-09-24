/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftArr= new Array(height.length).fill(0)
    let rightArr= new Array(height.length).fill(0)
    let answer=0
    leftArr[0]=height[0]
    rightArr[height.length-1]=height[height.length-1]
    for(let i=1;i<leftArr.length;i++){
        leftArr[i]=Math.max(leftArr[i-1],height[i])
    }
    for(let i=rightArr.length-2;i>=0;i--){
        rightArr[i]=Math.max(rightArr[i+1],height[i])
    }
    for(let i=0;i<height.length;i++){
        if(height[i]<leftArr[i]&&height[i]<rightArr[i]){
            answer+=Math.min(leftArr[i],rightArr[i])-height[i]
        }
    }
    return answer
};