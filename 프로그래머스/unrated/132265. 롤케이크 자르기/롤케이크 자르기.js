function solution(topping) {
    let map= new Map()
    let map2= new Map()
    let count=0
    for(let i=1;i<topping.length;i++){

        if(map2.has(topping[i])){
            map2.set(topping[i],map2.get(topping[i])+1)
        }else{
            map2.set(topping[i],1)
        }
    }
    for(let i=0;i<topping.length;i++){    
        if(!map.has(topping[i])){
           map.set(topping[i],1)
        }else{
             map.set(topping[i],map.get(topping[i])+1)
        }
        if(map.size===map2.size){
            count++
        }
        if(!topping[i+1]){
            continue
        }
        if(map2.get(topping[i+1])===1){
           map2.delete(topping[i+1])
        }else{
           map2.set(topping[i+1],map2.get(topping[i+1])-1)
        }
        
    }
    return count
}