function solution(maps) {
    let answer=Infinity
    const bfs=(start,end)=>{
        let stack=[[...start,0]]
        while(stack.length){
            let [x,y,val]=stack.shift()
            if(x===end[0]&&y===end[1]){
                answer=Math.min(answer,val)
            }
            if(x<0||x>maps.length-1||y<0||y>maps[0].length-1||!maps[x][y]){
                continue
            }
            val+=1
            maps[x][y]=0
            stack.push([x+1,y,val],[x-1,y,val],[x,y+1,val],[x,y-1,val])
            
        }
        
    }
    bfs([0,0],[maps.length-1,maps[0].length-1])
    return answer===Infinity?-1:answer+1
}