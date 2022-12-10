function solution(cacheSize, cities) {
    let arr=[]
    let a=0
    if(cacheSize===0){
        return cities.length*5
    }
    for(let i =0;i<cities.length;i++){
        let lower =cities[i].toLowerCase()
        let idx=arr.indexOf(lower)
       if(arr.length===cacheSize){
           if(idx>-1){
            arr.splice(idx,1)
           arr.push(lower)
               a+=1
           }else{
               arr.shift()
               arr.push(lower)
               a+=5
           }
          
           
       }else if(arr.length<cacheSize){
           if(idx>-1){
            arr.splice(idx,1)
           arr.push(lower)
               a+=1
           }else{
               arr.push(lower)
               a+=5
           }
           
       }      
    }
    
    return a
}