function solution(chicken) {
    let service = Math.floor(chicken/10)
    let n = Math.floor(chicken/10)
    let rest= chicken%10
 while(n>=10){
     n+=rest 
     rest=n%10
      n=Math.floor(n/10)
        service+= n  
 }
    return service+Math.floor((rest+n)/10)
}