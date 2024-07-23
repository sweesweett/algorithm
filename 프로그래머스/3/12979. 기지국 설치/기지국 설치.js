function solution(n, stations, w) {
    let count=0
    let prev=0
    let realWidth=(w*2+1)
    for(let i=0;i<stations.length;i++){
        let minus=(stations[i]-w)-prev-1
        let div=Math.floor(minus/realWidth)
        if(minus%realWidth){
            div+=1
        }
        count+=div
        prev=stations[i]+w
       
   }

   if(stations.at(-1)!==n){
       count+=Math.floor((n-prev)/realWidth)
       if((n-prev)%realWidth){
           count+=1
       }
   } 

    return count
}