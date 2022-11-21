function solution(lottos, win_nums) {
    let dd=[0,0]
    let obj={1:6,2:5,3:4,4:3,5:2,6:1}
    dd[1]=win_nums.filter(el=>lottos.includes(el)).length
    dd[0]=lottos.filter(el=>el===0).length
    
    if(dd[0]===0&&dd[1]===0){
        return [6,6]
    }
    
    if(dd[1]===0){
        return [1,6]
    }else if(dd[0]===0){
        return [obj[dd[1]],obj[dd[1]]]
    }
    return [obj[dd[0]+dd[1]],obj[dd[1]]]
    
}