/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let prr=  new MaxPriorityQueue()
    let answer=''
    let map= new Map()
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],1)
        }
    }
    for(let i=0;i<s.length;i++){
        let asc=s[i].charCodeAt()
        prr.enqueue(asc,map.get(s[i]))
    }
    while(prr.size()>0){
        let {priority,element}=prr.dequeue()
        let arr=[String.fromCharCode(element)]
        while(prr.front()&&priority===prr.front().priority){
            arr.push(String.fromCharCode(prr.dequeue().element))
            
        }
        arr.sort()
        answer+=arr.join('')
    }
    return answer
};