function solution(places) {
    let ans=[]
    for(let arr of places){
         ans.push(hasDistance(arr))
    }
   return ans
}
function hasDistance(arr){
    let xy=[]
    let newArr=[]
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(arr[i][j]==='P'){
                xy.push([i,j])
            }
        }
    }
    for(let i=0;i<xy.length;i++){
        let [ox,oy]=xy[i]
        for(let j=i+1;j<xy.length;j++){
            let [dx,dy]=xy[j]
            let val=Math.abs(dx-ox)+Math.abs(dy-oy)
            if(val===1){
                return 0
            }
            if(val<=2){
                newArr.push([xy[i],xy[j]])
            }
        }
    }
    
    if(!newArr.length){
        return 1
    }
    for(let [[i,j],[x,y]]of newArr){
        let val;
        if(i===x){
            if(j>y){
                val=arr[x][y+1]

            }else{
                val=arr[x][y-1]
            }  
        }else if(j===y){
            if(x>i){
                val=arr[x-1][y]
            }else{
                val=arr[x+1][y]
            }
    
        }else{
            if(!(arr[i][y]=='X'&&arr[x][j]==='X')){
                return 0
            }
            val='X'
        }
           if(val!=='X'){
           return 0
        }
    }
    return 1
}