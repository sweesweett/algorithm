/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[0]-b[0])
    let range=[...points[0]]
    let count=0
    for(let [start,end] of points){
        if(start>range[1]){
            range=[start,end]
            count++
        }else{
            range=[Math.max(start,range[0]),Math.min(end,range[1])]
        }
    }
    return count+1
};