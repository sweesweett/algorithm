function solution(w, h) {
    let total= w*h
    let slope= h/w
    let prev=0
    let minusTotal=0
    let saveNum;
    for(let i=1;i<=w;i++){
        let val=h*i/w
        if(Math.ceil(prev)!==prev){ 
             minusTotal+=Math.ceil(val)-Math.ceil(prev)+1

        }else{
            minusTotal+=Math.ceil(val)-prev
        }
        if(val===Math.ceil(val)){
            saveNum=i
            break
        }
        prev=val
    }
    return total-minusTotal*(w/saveNum)
}