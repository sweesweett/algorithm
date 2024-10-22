function solution(relation) {
    let subsets=[]
    let candidates=[]
    let bfs=()=>{
        let subset=[[[],0]]
        while(subset.length){
            let [arr,start]=subset.shift()
            for(let i=start;i<relation[0].length;i++){
                subsets.push([...arr,i])
                subset.push([[...arr,i],i+1])
            }
        }
        
    }
    bfs()
    subsets.forEach((subset)=>{
        let setOfSubset=new Set(subset)
        if(isUnique(relation,setOfSubset)){
           if(!candidates.some(el=>el.every(value=>setOfSubset.has(value)))){
               candidates.push(subset)
           }        
        
           } 
    })
   return candidates.length    
}



function isUnique(relation,subset){
    let set= new Set()
    for(let i=0;i<relation.length;i++){
        let totalString=relation[i].filter((_,i)=>subset.has(i)).join('')
        if(set.has(totalString)){
            return false
        }
        set.add(totalString)
    }
    return true
    
}

