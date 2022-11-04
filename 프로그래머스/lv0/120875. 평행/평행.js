function solution(dots) {
    let num=0
    let obj={}
    while(num<dots.length){
        for(let i= num; i<dots.length-1;i++){
            let c=(dots[i+1][1]-dots[num][1])/(dots[i+1][0]-dots[num][0])
            if(obj[c]===undefined){
                obj[c]=1
            }else{
               return 1
            }
        }
        num++
        
    }
    return 0
}