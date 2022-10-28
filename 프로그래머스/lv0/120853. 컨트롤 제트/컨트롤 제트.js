function solution(s) {
    let arr = s.split(' ')
    while(true){
        if(arr.indexOf('Z')===-1){
            return arr.reduce((a,b)=>Number(a)+Number(b),0)
        }
        console.log(arr)
        arr.splice(arr.indexOf('Z')-1,2)
        
        
    }
    
}