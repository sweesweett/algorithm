/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
   let dd=[x,y]
   let small=[0,Infinity]
   for(let i =0;i<points.length;i++){
       let distance=0
       if(dd[0]===points[i][0]){
        distance=Math.abs(dd[1]-points[i][1])
       }else if(dd[1]===points[i][1]){
         distance=Math.abs(dd[0]-points[i][0])

       }else{
   
           continue
       }

        if(distance<small[1]){
            small[1]=distance
            small[0]=i
        }
   }
    return small[1]===Infinity?-1:small[0]

};