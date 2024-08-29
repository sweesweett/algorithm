function solution(sequence) {
   let pulse1=sequence.map((el,i)=>i%2?el:-el) 
   let pulse2=sequence.map((el,i)=>i%2===0?el:-el) 
   let arr=Array.from({length:2},()=>new Array(pulse1.length).fill(0))
   arr[0][0]=pulse1[0]
   arr[1][0]=pulse2[0]
   let max=Math.max(pulse1[0],pulse2[0])
   for(let i=1;i<sequence.length;i++){
       arr[0][i]=Math.max(pulse1[i],arr[0][i-1]+pulse1[i])
       arr[1][i]=Math.max(pulse2[i],arr[1][i-1]+pulse2[i])
       max=Math.max(max,arr[0][i],arr[1][i])
       
   } 
   return max
}
