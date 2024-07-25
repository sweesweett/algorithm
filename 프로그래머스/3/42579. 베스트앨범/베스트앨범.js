function solution(genres, plays) {
    let obj={}
    for(let i=0;i<genres.length;i++){
        if(!obj[genres[i]]){
            let inObj={
            arr:[i],
            total:plays[i]
            }
           obj[genres[i]]=inObj
            continue   
        }
        let tmp=obj[genres[i]]
        tmp.total+=plays[i]
        tmp.arr.push(i)
        
    }
    let order=Object.keys(obj).sort((a,b)=>obj[b].total-obj[a].total)
    order.forEach(el=>{
        obj[el].arr.sort((a,b)=>plays[b]-plays[a])
    })
    return order.map(el=>obj[el].arr.slice(0,2)).flat()
}