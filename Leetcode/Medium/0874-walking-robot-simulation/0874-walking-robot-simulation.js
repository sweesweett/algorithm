var robotSim = function(commands, obstacles) {
    let xy=[0,0]
    let set= new Set(obstacles.map(el=>el.join('/')))
    let dir=0
    let directions=['top','right','bottom','left']
    let max=0
    for(let i=0;i<commands.length;i++){

        if(commands[i]===-1){
            dir=(dir+1)%4
        }else if(commands[i]===-2){
             dir=(dir+3)%4
        }else{
        xy=getCoord(directions[dir],xy,commands[i],set)
        max=Math.max(max,xy[0]**2+xy[1]**2)
        }
    }
    return max
};
function getCoord(direction,xy,command,set){
    let [x,y]=xy
    let dir={
        top:[0,1],
        left:[-1,0],
        right:[1,0],
        bottom:[0,-1]
    }
    for(i=0;i<command;i++){
        let [dx,dy]=dir[direction]
        let [tmpX,tmpY]=[x+dx,y+dy]
        if(set.has(`${tmpX}/${tmpY}`)){
            return [x,y]
        }
        x=tmpX
        y=tmpY
    }
    return[x,y]
}