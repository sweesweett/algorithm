/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const dfs=(x,y)=>{
        if(x<0||y<0||x>=board.length||y>=board[0].length||board[x][y]!=='O'){
            return;
        }
        board[x][y]="R"
        dfs(x+1,y)
        dfs(x,y+1)
        dfs(x-1,y)
        dfs(x,y-1)
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==='O'&&(i===0||j===0||i===board.length-1||j===board[0].length-1)){
                dfs(i,j)
            }
    
  
        }
    }
      for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
              if(board[i][j]==='R'){
                board[i][j]='O'
            }
            else if(board[i][j]==='O'){
                board[i][j]='X'
            }
          
    
  
        }
    }
    
};