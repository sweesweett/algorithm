function solution(board, moves) {
    var answer = 0;
    let stack=[]
    let empty=[]
    for(let i=0;i<moves.length;i++){
        let j=0
         if(empty.includes(moves[i])){
                continue
            }
        if(stack.length>1&&stack[stack.length-1]===stack[stack.lenth-2]){
            stack.splice(stack.length-2,2)
        }
        while(true){
            if(board[j][moves[i]-1]!==0){
                if(stack[0]!==undefined&&stack[stack.length-1]===board[j][moves[i]-1]){
                    stack.pop()
                    answer+=2
                }else{
                    stack.push(board[j][moves[i]-1])
                }
                board[j][moves[i]-1]=0
                break
            }else{
                if(j===board.length-1){
                    empty.push(moves[i])
                    break
                }
                j++
                
            }
        }
        
    }
//     let p=0
//     while(true){
//         if(p===stack.length-1){
//             return answer
//         }
//         if(stack[p]===stack[p+1]){
//             stack.splice(p,2)
//             answer+=2
//             p=0
//         }else{
//             p++
//         } 
        
//     }
    
    
    return answer
    
}
