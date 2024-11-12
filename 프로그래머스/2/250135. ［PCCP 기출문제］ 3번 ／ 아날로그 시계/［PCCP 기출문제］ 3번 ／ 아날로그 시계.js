function solution(h1, m1, s1, h2, m2, s2) {
    let prev=[((h1*30)+m1*0.5+s1*(0.5/60))%360,(m1*6+s1*0.1)%360,s1*6%360]
    let totalSec=(m2-m1)*60+(h2-h1)*3600+s2-s1
    let count=0
    if(prev[0]===prev[1]&&prev[0]===prev[2]&&prev[1]===prev[2]){
        count++
    }
    for(let i=1;i<=totalSec;i++){
        let hourD=((h1*30)+m1*0.5+(s1+i)*(0.5/60))%360||360
        let minD=(m1*6+(s1+i)*0.1)%360||360
        let secD=((s1+i)*6)%360||360
        if(hourD===minD&&minD===secD&&secD===hourD){
            count++
             prev[0]=hourD%360
             prev[1]=minD%360
             prev[2]=secD%360
            continue
            
        }
        if(prev[0]>prev[1]&&hourD<=minD){
            count++
        }
        else if(prev[1]>prev[2]&&minD<=secD){
            count++
        }
        else if(prev[0]>prev[2]&&hourD<=secD){
            count++
        }
       prev[0]=hourD%360
       prev[1]=minD%360
       prev[2]=secD%360
        
    }
    return count
}