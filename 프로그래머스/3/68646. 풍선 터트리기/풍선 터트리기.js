function solution(a) {
   let leftArr= new Array(a.length).fill(Infinity)
   let rightArr=new Array(a.length).fill(Infinity)
   let count=0
   leftArr[0]=a[0] 
   rightArr[a.length-1]=a[a.length-1]
   for(let i=1;i<a.length;i++){
       leftArr[i]=Math.min(leftArr[i-1],a[i])
   }
   for(let i=a.length-2;i>=0;i--){
       rightArr[i]=Math.min(rightArr[i+1],a[i])
   }
   return a.filter((el,i)=>(el<=leftArr[i]||el<=rightArr[i])).length 
  
}