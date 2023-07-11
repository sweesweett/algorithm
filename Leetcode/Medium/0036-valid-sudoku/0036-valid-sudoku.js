/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let i=0;i<board.length;i++){
        const set= new Set()
        const set2= new Set()
        const set3= new Set()
        for(j=0;j<9;j++){
            let row=board[i][j]
            let col=board[j][i]
            let box= board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
            if(row!=='.'){
                if(set.has(row)){
                    return false
                }
                set.add(row)
            }
            if(col!=='.'){
                if(set2.has(col)){
                    return false
                }
                set2.add(col)
            }
            if(box!=='.'){
                if(set3.has(box)){
                    return false
                }
                set3.add(box)
            }
           
        }
    }
   return true
}