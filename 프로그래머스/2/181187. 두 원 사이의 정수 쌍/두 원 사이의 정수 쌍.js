
function solution(r1, r2) {
    let count=0
    for(let i=0;i<=r2;i++){ 
       let sq1=Math.sqrt(r1**2-i**2)
       let sq2=Math.sqrt(r2**2-i**2)
       if(i<=r1){
           count+=Math.floor(sq2)-Math.ceil(sq1)+1
       }else{
           count+=Math.floor(sq2)+1
       }
    }

    return count*4-(r2-r1+1)*4
}