//케이스 2개만 고려함.routes가 3개 이상이 될 수 있기 때문에 그거 고려해서 코드 다시 짜기
function solution(points, routes) {
    let map= new Map()
    let coordMap= new Map()
    let repetSet= new Set()
    let newArr=[]
    let count=0
    for(let i=0;i<points.length;i++){
        let [x,y]=points[i]
        map.set(i+1,[x,y])
    }
    for(let i=0;i<routes.length;i++){
        let time=0
        for(let j=0;j<routes[i].length-1;j++){
            let curr= [...map.get(routes[i][j])]
            let next=map.get(routes[i][j+1])
            let coord=[next[0]-curr[0],next[1]-curr[1]]
            while(coord[0]!==0||coord[1]!==0){
                count+=recordCoord(curr,time,coordMap,repetSet)
                if(coord[0]!==0){
                    if(coord[0]>0){
                        curr[0]+=1
                        coord[0]-=1
                        time+=1
                    }else{
                       curr[0]-=1
                       coord[0]+=1
                       time+=1
                    }
                }else if(coord[1]!==0){
                    if(coord[1]>0){
                        curr[1]+=1
                        coord[1]-=1
                        time+=1
                    }else{
                       curr[1]-=1
                       coord[1]+=1
                       time+=1
                        
                    }    
                }    
            }
            if(j===routes[i].length-2){
                count+=recordCoord(curr,time,coordMap,repetSet)
            }
        }
    }
    return count
}
function recordCoord(curr,time,coordMap,repetSet){
   let str=`${curr[0]}/${curr[1]}`
   let count=0
   if(!coordMap.has(str)){
       coordMap.set(str,new Set())
     }
   let set= coordMap.get(str)
   if(set.has(time)){
       if(!repetSet.has(`${str}/${time}`)){
          repetSet.add(`${str}/${time}`)
          count++
         }
    }else{
     set.add(time)
    }    
    
    return count
}
