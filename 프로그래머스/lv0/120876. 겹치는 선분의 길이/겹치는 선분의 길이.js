function solution(lines) {
    let min= Math.min(...lines.flat())
    let max= Math.max(...lines.flat())
   let start=0-min
       let line={}
   for(let i=start+lines[0][0];i<start+lines[0][1];i++){
       line[i]=1
   }
    aa(start+lines[1][0],start+lines[1][1],line)
 
    aa(start+lines[2][0],start+lines[2][1],line)  
    return Object.values(line).filter(el=>el===0).length

}
function aa(a,b,line){
    for(let i=a;i<b;i++){
       
       if(line[i]===undefined){
           line[i]=1 
       }else{
           line[i]=0
       }
       
   }
}