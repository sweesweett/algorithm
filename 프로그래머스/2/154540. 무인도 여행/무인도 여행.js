function solution(maps) {
    let mapArr= maps.map((el=>el.split('')))
    var answer = [];
    let sum=0
    let dfs=(xy,prev)=>{
        let [x,y]=xy
        if(x>=mapArr.length||y>=mapArr[0].length||x<0||y<0){
            return;
        }
        let val= Number(mapArr[x][y])
   
        if(prev===1&&isNaN(val)){
            return;
        }
        if(prev===-1){
            return
        }
        let prevVal=isNaN(val)?-1:1
         if(prev&&prevVal===-1){
             return;
         }
        if(prevVal===1){
             sum+=val
           mapArr[x][y]='O'
           
        }
        dfs([x,y+1],prevVal)
        dfs([x+1,y],prevVal)
         dfs([x,y-1],prevVal)
        dfs([x-1,y],prevVal)
       
        
        
    }
    for(let i =0;i<mapArr.length;i++){
        for(let j=0;j<mapArr[i].length;j++){
            if(!isNaN(Number(mapArr[i][j]))){
                dfs([i,j],0)
                if(sum){
                   answer.push(sum)  
                }
                sum=0
            }
        }
    }
    if(answer.length){
        return answer.sort((a,b)=>a-b)
    }
    return [-1]
}