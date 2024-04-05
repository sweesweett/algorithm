function solution(bandage, health, attacks) {
   let initial=health
   let [time,sPerRecover,extraRecover]=bandage
   let arr=[]
   for(let [attackTime,attack] of attacks){
       let i=arr.length
       while(i<=attackTime){
           arr[i]=0
           i++
       }
       arr[i-1]=-attack
   }
   arr[0]=initial
   let aa=1

   for(let i=1;i<arr.length;i++){
       let last= arr[i-1]
       if(arr[i]){
           aa=1
           arr[i]+=last
           continue
       }
       arr[i]=Math.min(last+sPerRecover,health)

       if(aa===time){
           arr[i]=Math.min(arr[i]+extraRecover,health)
           aa=0
       }
       if(arr[i]<=0){
           return -1
       }
       aa++
   }

    return arr.at(-1)<=0?-1:arr.at(-1)
}