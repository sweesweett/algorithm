function solution(board, moves) {
    var answer = 0;
    let stack=[]
let dd = board.map((_,idx)=>{
    let cc=[]
    for(let i=0;i<board.length;i++){
        if(board[i][idx]!==0){
             cc.push(board[i][idx])
        }
       
    }
    return cc
    
})
for(let i =0;i<moves.length;i++){
    if(dd[moves[i]-1].length>0){
        if(stack[stack.length-1]===dd[moves[i]-1][0]){
            answer+=2
            stack.pop()
        }else{
            stack.push(dd[moves[i]-1][0])
        }
        
       dd[moves[i]-1].splice(0,1)
        
    }else{
        continue
    }
    
}
    
    return answer
    
}
//다시푼것
