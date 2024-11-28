function solution(m, n, startX, startY, balls) {
    let answer=[]
    for(let [p,q] of balls){
        let min=Infinity
        //부딪치는 면에 따라서 변수
        let top=(startX-p)**2+(startY-(2*n-q))**2
        let left=(startX+p)**2+(startY-q)**2
        let right=(startX-(2*m-p))**2+(startY-q)**2
        let bottom=(startX-p)**2+(startY+q)**2
        if(startX!==p||startY<q){
            min=Math.min(min,bottom)
        }
        if(startY!==q||startX<p){
            min=Math.min(min,left)
        }
        if(startX!==p||startY>q){
            min=Math.min(min,top)
        }
        if(startY!==q||startX>p){
             min=Math.min(min,right)
        }
        answer.push(min)
    }
    return answer
}
 