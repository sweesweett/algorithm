function solution(n, left, right) {
    let arr=[]
    for(let i =left;i<=right;i++){
            let rest =(i+1)%n
            let dd= Math.floor((i+1)/n)
        if(rest===0){
            arr.push(n)
        }
        else if(dd>=rest){
            arr.push(dd+1)
        }else{
           
                arr.push(rest)          
  
        }
    }
    return arr
}
