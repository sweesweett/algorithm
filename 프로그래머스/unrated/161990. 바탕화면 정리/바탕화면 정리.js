function solution(wallpaper) {
    var answer = [];
    let max=[-1,-1]
    let min=[wallpaper.length,wallpaper[0].length]
    wallpaper.forEach((el,idx)=>{
        for(let i =0;i<el.length;i++){
            if(wallpaper[idx][i]==='#'){
                if(max[1]<i){
                    max[1]=i
                }
                if(max[0]<idx){
                    max[0]=idx
                }
                if(min[1]>i){
                    min[1]=i
                }
                if(min[0]>idx){
                    min[0]=idx
                }
                
                    
                }
                
            
            
        }
        
    })
    return [...min,max[0]+1,max[1]+1]
}