function solution(gems) {
    let total=new Set(gems).size
    let map= new Map()
    let length=gems.length
    let ans=[0,length]
    let [l,r]=[0,0]
    while(r<gems.length){
        map.set(gems[r],(map.get(gems[r])??0)+1)
        r++
        while(total===map.size){

            if(r-l<ans[1]-ans[0]){
                ans[0]=l
                ans[1]=r
                
            }
            map.set(gems[l],map.get(gems[l])-1)
            if(map.get(gems[l])===0){
                map.delete(gems[l])
            }
            l++
            
        }
        
        
    }
    return [ans[0]+1,ans[1]]
}