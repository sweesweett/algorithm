function solution(s) {
    let ss= s.replace(/{/g,'[')
    ss=ss.replace(/}/g,']')
    ss=JSON.parse(ss)
    ss.sort((a,b)=>{
        if(a.length>b.length){
            return 1
        }else{
            return -1
        }
    })
    ss=ss.flat()
    let answer= new Set(ss)
    return [...answer]
}