function solution(queue1, queue2) {
    let q1=queue1.reduce((a,b)=>a+b)
    let q2=queue2.reduce((a,b)=>a+b)
    let count=0
    let maxroop=queue1.length
    let ax=[0,0]
    while(q1>q2||q1<q2){
        let [x,y]=ax
        if(count>=maxroop*4){
            return -1 
        }
        if(q1>q2){
            let d=queue1[ax[0]]
            queue2.push(d)
            q1-=d
            q2+=d
            ax[0]++
        }else if(q1<q2){
            let d=queue2[ax[1]]
            queue1.push(d)
            q1+=d
            q2-=d
            ax[1]++
            
        }
        count++
    }
    return count
}