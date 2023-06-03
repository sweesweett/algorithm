/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let a=0
    let b=0
    let arr= Array.from({length: 3}, _ => new Array(3).fill(''))
    let [g,h]=['','']
    for(let i=0;i<moves.length;i++){
        let [p,q]=moves[i]
        arr[p][q]=i%2===0?'a':'b'
    }
    for(let i=0;i<arr.length;i++){
        let [q,w]=['','']
       
        for(let j=0;j<arr.length;j++){
            q+=arr[j][i]
            w+=arr[i][j]
        }
        g+=arr[i][i]
        h+=arr[i][2-i]
        if(q==='aaa'){
            a+=1
        }else if(q==='bbb'){
            b+=1
        }
        if(w==='aaa'){
            a+=1
        }else if(w==='bbb'){
            b+=1
        }
        if(i===arr.length-1){
            if(g==='aaa'){
                a+=1
            }else if(g==='bbb'){
                b+=1
            }
            if(h==='aaa'){
                a+=1
            }else if(h==='bbb'){
                b+=1
            }
        }
    }
   
    if(a===b){
        if(a===0&&b===0&&moves.length<9){
            return 'Pending'
        }
        return "Draw"
    }else if(a>b){
        return 'A'
    }else{
        return 'B'
    }
};