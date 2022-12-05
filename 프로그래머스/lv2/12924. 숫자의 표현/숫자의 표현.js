
function solution(n) {
    let j=1
    let arr=[]
    let num=2*n
for(let i =0;i<=n;i+=j){
    if(i**2+i-2*n===0){
       j=i
        arr.push(j)
        break
    }
    j++
}
if(j===1){
    j=n/2
}    
for(let i =1;i<j;i++){
    if(num%i===0){
        if((num/i-i)%2){
            arr.push(i)
        }
        
       }

    }
return arr.length
}