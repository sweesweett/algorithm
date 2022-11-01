function solution(emergency) {
    var answer = [...emergency];
    let gg={}
    answer.sort((a,b)=>b-a)
    answer.forEach((el,idx)=>{
        gg[el]=idx+1
    })
    return emergency.map(el=>gg[el])
}