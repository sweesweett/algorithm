function solution(park, routes) {
    const dic={
        E:[0,1],
        W:[0,-1],
        S:[1,0],
        N:[-1,0]
    }
    //1. S위치 찾기 2. 격자배열이 몇개인지 세기 // 시작하기//
    const xy=[park.length-1,park[0].length-1]
    let start=[-1,-1]
    for(let i =0;i<park.length;i++){
        for(let j=0;j<park[0].length;j++){
            if(park[i][j]==='S'){
                start=[i,j]
                break
            }
        }
  
    }

     routes.forEach(el=>{
         const direction=el.slice(0,1)
         const block = Number(el.slice(2))
        const tmp=[...start]
        let isTrue= true
        for(let i =1;i<=block;i++){
            tmp[0]+=dic[direction][0]
            tmp[1]+=dic[direction][1]
      
             if(tmp[0]>xy[0]||tmp[0]<0||tmp[1]>xy[1]||tmp[1]<0){
                isTrue=false
                break
                }
            else if(park[tmp[0]][tmp[1]]==='X'){
                isTrue=false
                 break
              }
           
                
            }
         if(isTrue){
             start[0]=tmp[0]
             start[1]=tmp[1]
         }
    })
  
  return start
}

