/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a,b)=>{
        if(a[0]-b[0]<0){
            return 1
        }else if(a[0]-b[0]>0){
            return -1
        }else{
            return a[1]-b[1]
        }


    })
    const xy=(coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0])
    for(let i =0;i<coordinates.length-1;i++){
        const [x1,y1]=coordinates[i]
        const [x2,y2]=coordinates[i+1]
        if((y2-y1)/(x2-x1)!==xy){
            return false
        }
    }
return true
};