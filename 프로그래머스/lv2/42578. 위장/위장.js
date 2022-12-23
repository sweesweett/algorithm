function solution(clothes) {
   let obj={}
   for(let i=0;i<clothes.length;i++){
       if(obj[clothes[i][1]]!==undefined){
           obj[clothes[i][1]]=1
       }else{
            obj[clothes[i][1]]+=1
       }
   }
    console.log(Object.keys(obj))
}