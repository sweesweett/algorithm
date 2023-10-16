function solution(elements) {
    let set= new Set()
    let length= elements.length
    const recursion=(prev)=>{
        if(prev>=length*2-1){
            return;
        }
        let arr=[]
        let end=prev+length-1>=length*2?length:prev+length-1
        for(let i=prev;i<end;i++){
            if(!arr.length){
                arr.push(elements[i%length])
            }else{
                let last= arr.pop()
                arr.push(last+elements[i%length])
            }
            set.add(arr.at(-1))
            
        }
        recursion(prev+1)

    }
    recursion(0)
    return set.size+1
}