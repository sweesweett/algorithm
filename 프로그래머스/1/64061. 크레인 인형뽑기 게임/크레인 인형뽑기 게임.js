function solution(board, moves) {
    let dollCols=Array.from({length:board.length},()=>[])
    let stack=[]
    let count=0
    for(let i=0;i<board[0].length;i++){
        for(let j=board.length-1;j>=0;j--){
            if(!board[j][i]){
                break
            }
            dollCols[i].push(board[j][i])
        }
    }
    for(let move of moves){
        if(dollCols[move-1].length>0){
        let pop=dollCols[move-1].pop()
        if(!stack.length){
            stack.push(pop)
            continue
        }
        if(stack.at(-1)===pop){
            stack.pop()
            count+=2
        }else{
             stack.push(pop)
        }
        }
    }
    return count
}