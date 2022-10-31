function solution(lines) {
    // let arr=[]
    let min= Math.min(...lines.flat())
    let max= Math.max(...lines.flat())
    let arr=Array(max-min).fill(2)
   let start=0-min
   for(let i=start+lines[0][0];i<start+lines[0][1];i++){
      arr[i]=1
   }
    for(let i=start+lines[1][0]; i<start+lines[1][1];i++){
        if(arr[i]===1){
            arr[i]=0
        }else if(arr[i]===2){
            arr[i]=1
        }
    }
        for(let i=start+lines[2][0]; i<start+lines[2][1];i++){
        if(arr[i]===1){
            arr[i]=0
        }else if(arr[i]===2){
            arr[i]=1
        }
    }
   return arr.filter(el=>el===0).length
//     let line={}
//     let count=0
//     let tmpLeft= 0
  
//    for(let i=lines[0][0];i<=lines[0][1];i++){
//        line[i]=1
//    }
//     aa(lines[1][0],lines[1][1],line)
 
//     aa(lines[2][0],lines[2][1],line)  
       
//     let keys= Object.keys(line).sort((a,b)=>{
//         if(Number(a)<=Number(b)){
//             return -1
//         }else{
//             return 1
//         }
//     })
//     for(let i = 0 ; i<keys.length;i++){
//         if(i===0&&line[keys[i]]===0){
//             tmpLeft=Number(keys[i])
//         }
//         else if(line[keys[i-1]]===1&&line[keys[i]]===0){
//             tmpLeft=Number(keys[i])
//         }else if(line[keys[i]]===0&&line[keys[i+1]]===1){
//             count+=Math.abs(Number(keys[i])-tmpLeft)
//             // tmpLeft=Number(keys[i])
        
//         }else if (line[keys[i]]===0&&i===keys.length-1){
//             if(Number(keys[i-1])!==1){
//                    count+=Math.abs(Number(keys[i])-tmpLeft)
//             }
         
//         }else{}

//     }
//     return count
// }
// function aa(a,b,line){
//     for(let i=a;i<=b;i++){
       
//        if(line[i]===undefined){
//            line[i]=1 
//        }else{
//            line[i]=0
//        }
       
//    }
}