function solution(n) {
   let total = binary(n)
   let num=n+1
   while(true){
       let newBinary = binary(num)
    if(newBinary===total){
        return num
    }else{
        num++
    }       
   }
}
function binary(n){
    let dd=n.toString(2).split('')
    
    return dd.filter(el=>el==='1').length
    
}