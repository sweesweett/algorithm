/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let start=image[sr][sc]
    if(start===color){
        return image
    }
    let queue=[[sr,sc]]
    let direction=[[0,1],[0,-1],[1,0],[-1,0]]
    let row=image.length,col=image[0].length
    image[sr][sc]=color
    while(queue.length){
        let [i,j]=queue.shift()
        for(let [x,y] of direction){
            let dx=i+x
            let dy=j+y
            if(dx>=0&&dx<row&&dy>=0&&dy<col){
                if(image[dx][dy]===start){
                    image[dx][dy]=color
                    queue.push([dx,dy])
                }
            }
        }
    }
    return image
};