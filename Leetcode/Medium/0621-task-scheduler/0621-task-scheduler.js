/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let ans=0
    if(n===0){
        return tasks.length
    }
    let pr = new MaxPriorityQueue()
    let map=new Map()
    for(let val of tasks){
        if(map.has(val)){
            map.set(val,map.get(val)+1)
        }else{
            map.set(val,1)
        }
    }
    map.forEach((val,key)=>{
        pr.enqueue(key,val)
    })
    let obj={}
    while(pr.size()>0){
        
        let arr=[]
        let count=0
        while(count<=n&&pr.size()>0){
           let {element,priority}=pr.dequeue()

          if(obj[element]>0){
 
              arr.push({element,priority})

          }  
          else{
            if(priority-1>0){
                arr.push({element,priority:priority-1})
                obj[element]=1
            }
            count++
        }
        }

        if(Object.keys(obj).length){
             ans+=n+1
        }else{
            ans+=count
        }
        arr.forEach(({element,priority})=>{
            pr.enqueue(element,priority)
            delete obj[element]
            })
    }
    return ans
};