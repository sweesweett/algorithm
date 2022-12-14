function solution(s) {
    let ss= s.replaceAll(/{/g,'[')
    ss=ss.replaceAll(/}/g,']')
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