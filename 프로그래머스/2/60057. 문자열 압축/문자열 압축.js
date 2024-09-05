function solution(s) {
    let min=s.length
    let length=s.length
    for(let i=1;i<=length/2;i++){
        let count=1
        let str=''
        let tmp=s.slice(0,i)
        for(let j=i;j<s.length;j+=i){
            let init=s.slice(j,j+i)
            if(tmp!==init){
                str += (count > 1 ? count : "") + tmp
                tmp=init
                count=1
            }else{
                count++
            }
        }
        str += (count > 1 ? count : "") + tmp
        min=Math.min(min,str.length)
    }
    return min
}
