function solution(board){
  let arr= Array.from({length:board.length},()=>new Array(board[0].length).fill(0))
  let max=board[0][0]
  for(let i=1;i<arr.length;i++){
      for(let j=1;j<arr[0].length;j++){
          if(board[i][j]){
              if(!max){
                  max=1
              }
              board[i][j]=board[i][j]+Math.min(board[i-1][j],board[i][j-1],board[i-1][j-1])
              max=Math.max(max,board[i][j])
          }
      }
  }
    return max**2
}