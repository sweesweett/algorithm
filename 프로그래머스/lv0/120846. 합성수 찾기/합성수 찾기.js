function solution(n) {
   let y=[]
   for(let i =2;i<=n;i++){
       if(!isPrime(i)){
           y.push(i)
       }

       
   }
    
   return y.length
}
function isPrime(n) {
    for (let i=2; i<=n**0.5; i++) {
      
    	if (n%i === 0) return false;
    }
    return true;
}