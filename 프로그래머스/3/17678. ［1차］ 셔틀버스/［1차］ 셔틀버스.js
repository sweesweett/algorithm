function solution(n, t, m, timetable) {
   //셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이 탈 수 있다.
   let start=[9,0]
   let arr=[]
   timetable.sort((a,b)=>{
       let [hourA,minA]=a.split(':')
        let [hourB,minB]=b.split(':')
        if(hourA!==hourB){
            return hourA-hourB
        }
       return minA-minB
   }) 
   let [i,j,k]=[0,0,0]
    while(i<n&&j<timetable.length){
        let tmpArr=[]
        while(k<m&&j<timetable.length){
            let [hour,min]=timetable[j].split(':').map(Number)
            if(hour>start[0]){
                break
            }
            if(hour<start[0]||(hour===start[0]&&min<=start[1])){
                tmpArr.push([hour,min])
                  j++
                  k++
            }else{
                break
            }
        }
        arr.push(tmpArr)  
        
        k=0
        if(j<timetable.length&&i<n){
            i++
        }else{
            break
        }
        if(i<n){
            start[1]+=t
            if(start[1]>=60){
            start[0]+=1
            start[1]%=60
        } 
            
        }
       
        
    }
    let ansH;
    let ansM;
    let answer=''
    if(arr.at(-1).length<m){
        let [hour,min]=start
        ansH=hour
        ansM=min
    }
    else if(arr.at(-1).length===m){
        let [hour,min]=arr.at(-1).at(-1)
          min-=1
        if(min<0){
            min=60+min
            hour-=1
        }
        ansH=hour
        ansM=min
    }
      if(ansH<10){
           answer+=`0${ansH}:`
       }else{
           answer+=`${ansH}:`
       } 
       if(ansM<10){
           answer+=`0${ansM}`
       }else{
           answer+=`${ansM}`
       }
    return answer
}