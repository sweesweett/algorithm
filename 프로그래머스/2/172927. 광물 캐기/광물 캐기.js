function solution(picks, minerals) {
    //[dia,iron,stone] 5개 캔 후는 더이상 사용x
    let map1= [[1,1,1],[5,1,1],[25,5,1]]
    let map2= new Map([[0,'diamond'],[1,'iron',],[2,'stone'],['diamond',0],['iron',1],['stone',2]])
    let map=new Map(Array.from(new Array(picks.length),(_,i)=>[map2.get(i),picks[i]]))
    let min= minerals.length*25

    const dfs=(map,idx,result)=>{
        if(idx>=minerals.length){
            min= Math.min(min,result)
            return
        }
        let isDone=0
        for(let [key,value] of map){
            if(value<=0){
                isDone++
                continue
            }
            let tmpResult=result
            let pp=true
            for(let j=idx;j<idx+5;j++){
                if(minerals[j]===undefined){
                    min= Math.min(min,tmpResult)
                    pp=!pp
                    break
                }
                tmpResult+=map1[map2.get(key)][map2.get(minerals[j])]
            }
           
            if(pp){
              let val= value
              map.set(key,val-1)
              dfs(map,idx+5,tmpResult)
              map.set(key,val)  
            }
        
            
        }
        if(isDone===picks.length){
            console.log('here')
            min= Math.min(min,result)
        }
    }
    dfs(map,0,0)
    return min
}

