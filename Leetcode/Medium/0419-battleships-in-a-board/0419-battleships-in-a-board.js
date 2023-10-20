/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let ans=0
    const dfs=(xy)=>{
        let [x,y]=xy
        if(x<0||y<0||x>=board.length||y>=board[0].length){
            return;
        }
        if(board[x][y]==='.')return
        board[x][y]='.'
        dfs([x+1,y])
        dfs([x,y+1])
   
  
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==='X'){
                dfs([i,j])
                ans++
  
            }

        }
    }
    return ans
};