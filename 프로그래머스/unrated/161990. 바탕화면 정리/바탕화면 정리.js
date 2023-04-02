function solution(wallpaper) {
    var answer = [];
    // let max=[-1,-1]
    // let min=[wallpaper.length,wallpaper[0].length]
    const x=[]
    const y=[]
    wallpaper.forEach((el,idx)=>{
        for(let i =0;i<el.length;i++){
            if(wallpaper[idx][i]==='#'){
             x.push(idx)
            y.push(i)
                
            
            
        }}
        
    })
    return [Math.min(...x),Math.min(...y),Math.max(...x)+1,Math.max(...y)+1]
}