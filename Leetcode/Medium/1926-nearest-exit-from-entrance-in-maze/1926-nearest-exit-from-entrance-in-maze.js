/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let arr=[[entrance,0]]
    let directions=[[0,1],[1,0],[0,-1],[-1,0]]
    let min=Infinity
    maze[entrance[0]][entrance[1]]='+'
    while(arr.length){
      let [[i,j],sum]= arr.shift()
      for(let [dx,dy] of directions){
        let [x,y]=[i+dx,j+dy]
        if(x<0||y<0||x>=maze.length||y>=maze[0].length||maze[x][y]!=='.'){
          continue
        }
        if(x===0||y===0||x===maze.length-1||y===maze[0].length-1){
          if(maze[x][y]==='.'){
            return sum+1
          }
          continue
        }
        if(maze[x][y]==='.'){
          maze[x][y]='+'
          arr.push([[x,y],sum+1])
        }
      }
    }
  return -1
};