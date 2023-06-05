/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let stack1=[]
    let map=new Map()
    for(let i=0;i<position.length;i++){
        map.set(position[i],speed[i])
    }
    position.sort((a,b)=>b-a)
    let value=0

    for(let i=0;i<position.length;i++){
        if(!stack1.length){
            stack1.push(position[i])
            continue
        }
        let y=stack1.at(-1)-position[i]
        let x=map.get(stack1.at(-1))-map.get(position[i])
        let val=Math.abs(y/x)*map.get(position[i])+position[i]
        if(!(map.get(stack1.at(-1))<map.get(position[i])&&val<=target)){
            if(stack1.length>0){
                value++
                stack1=[]
            }
            stack1.push(position[i])
        }
    }
    return stack1.length>0?value+1:value
};