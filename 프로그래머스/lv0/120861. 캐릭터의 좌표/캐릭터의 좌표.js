function solution(keyinput, board) {
    let result=[0,0]
    for(let i =0; i<keyinput.length; i++){
        if(keyinput[i]==='left'){
        result[0]=result[0]-1
            rearrange(result,board)
        }else if(keyinput[i]==='right'){
             result[0]=result[0]+1
             rearrange(result,board)
        }else if(keyinput[i]==='up'){
             result[1]=result[1]+1
             rearrange(result,board)
            
        }else{
             result[1]=result[1]-1
             rearrange(result,board)
        }
    }

    return result
}
function rearrange(result,board){
        if(Math.abs(result[0])>Math.floor(board[0]/2)&&result[0]<0){
        result[0]=-Math.floor(board[0]/2)
    }else if(Math.abs(result[0])>Math.floor(board[0]/2)&&result[0]>=0){
          result[0]=Math.floor(board[0]/2)
    }
        if(Math.abs(result[1])>Math.floor(board[1]/2)&&result[1]<0){
        result[1]=-Math.floor(board[1]/2)
    }else if(Math.abs(result[1])>Math.floor(board[1]/2)&&result[1]>=0){
          result[1]=Math.floor(board[1]/2)
    }   
        
    return result
}