/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let start=image[sr][sc]
  const dfs=(x,y)=>{
      if(x<0||x>=image.length||y<0||y>=image[0].length){
          return;
      }
      if(image[x][y]===start){
          if(image[x][y]===color){
              return;
          }
          image[x][y]=color
      }else{
          return;
      }
      dfs(x-1,y)
      dfs(x+1,y)
      dfs(x,y-1)
      dfs(x,y+1)
  }
    dfs(sr,sc)
  return image  
};