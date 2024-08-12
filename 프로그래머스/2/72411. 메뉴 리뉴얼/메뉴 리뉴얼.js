function solution(orders, course) {
    let obj={}
    let obj2={}
    let maxVal
    let ans=[]
    for(let num of course){
        obj2[num]=[]
        maxVal=Math.max(num,maxVal)
    }
    for(let val of orders){
        let newVal=val.split('').sort().join('')
      recursion(0,[],newVal)     
    }
    for(let key in obj2){
        obj2[key].sort((a,b)=>obj[b]-obj[a])
        let max;
        for(let val of obj2[key]){
            if(obj[val]===1)break
            if(!max){
                ans.push(val)
                max=obj[val]
                continue
            }
            if(max===obj[val]){
                ans.push(val)
            }else{
                break
            }
        }
    }
    return ans.sort()
    
    
    
   function recursion(idx,arr,origin,set){
       if(arr.length>=maxVal){
        return
    }
    if(idx>=origin.length){
        return
    }
    for(let i=idx;i<origin.length;i++){

        let newArr=[...arr,origin[i]]
        let join=newArr.join('')
        
      if(newArr.length>=2){
        if(obj2[newArr.length]){
            if(!obj[join]){
            obj[join]=0  
            obj2[newArr.length].push(join)
         }
          obj[join]+=1   
        }  
      }

        recursion(i+1,[...arr,origin[i]],origin)

    }
    
    
}
}
