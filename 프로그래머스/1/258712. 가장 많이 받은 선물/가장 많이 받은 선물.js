function solution(friends, gifts) {
    let map = new Map(Array.from(new Array(friends.length),(_,i)=>[friends[i],i]))
    let arr= Array.from(new Array(friends.length),()=>new Array(friends.length).fill(0))
    let giftRate=new Array(friends.length).fill(0)
    let max=0
    for(let val of gifts){
        let [from,to] = val.split(' ').map(el=>map.get(el))
        arr[from][to]+=1
        giftRate[from]+=1
        giftRate[to]-=1
        }
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr[0].length;j++){
            if(i===j){
                continue
            }
            if(arr[i][j]>arr[j][i]){
                count+=1
            }else if(arr[i][j]===arr[j][i]){
                if(giftRate[i]>giftRate[j]){
                    count+=1
                }
            }
            
        }
        max=Math.max(max,count)
    }
    return max
}