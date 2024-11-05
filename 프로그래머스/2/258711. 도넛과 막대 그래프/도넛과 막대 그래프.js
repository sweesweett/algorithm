function solution(edges) {
    let ans=new Array(4).fill(0)
    let obj={}
    let total=0
    for(let [to,from] of edges){
        if(!obj[to]){
            obj[to]=[0,0]
        }
        if(!obj[from]){
            obj[from]=[0,0]
        }
        obj[to][0]+=1
        obj[from][1]+=1
    }
    for(let key in obj){
        let [to,from]=obj[key]
        if(to>=2&&from>=2){
            ans[3]+=1
        }
        if(to===0){
            ans[2]+=1
        }
        if(from===0&&to>=ans[3]+ans[2]){
            if(ans[0]===0){
                ans[0]=Number(key)
                total=to
                continue
            }
            if(obj[ans[0]][0]<to){
                ans[0]=Number(key)
                total=Number(to)
            }
        }
    }
    ans[1]=total-ans[3]-ans[2]
  return ans  
}
