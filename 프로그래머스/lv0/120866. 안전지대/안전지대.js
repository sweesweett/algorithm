function solution(board) {
    let ee=board.length
    let copy=new Array(board.length**2).fill(0)
   
   for(let i=0;i<ee;i++){
       for(let j=0;j<ee;j++){
           if(board[i][j]===1){
               let [p,q,r,s]=dd(ee,i,j)
               copy[i*ee+j] =1
                copy[p*ee+j] =1
                copy[q*ee+j] =1
                copy[i*ee+r] =1
                copy[i*ee+s] =1
                copy[p*ee+r] =1
                copy[p*ee+s] =1
                copy[q*ee+r] =1
                copy[q*ee+s] =1
           }
       }
   }
    return copy.filter(el=>el===0).length
   }
    function dd (ee,i,j){
        let [p,q,r,s]=[i-1,i+1,j-1,j+1]
     
        if(p<0){
            p=0
        }
        if(q>=ee){
            q=ee-1
        }
        if(r<0){
            r=0
        }
        if(s>=ee){
            s=ee-1
        }
        
       return [p,q,r,s]
    }