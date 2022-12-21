function solution(k, tangerine) {
    let obj={}
    let aa=k
    let count=0
    for(let i =0;i<tangerine.length;i++){
        if(obj[tangerine[i]]===undefined){
             obj[tangerine[i]]=1
        }else{
             obj[tangerine[i]]+=1
        }
       
    }
    let dd= Object.values(obj).sort((a,b)=>b-a)
    for(let i =0;i<dd.length;i++){
        if(aa<=0){
            return count
        }
        aa-=dd[i]
        count++
        
    }
    return count
}