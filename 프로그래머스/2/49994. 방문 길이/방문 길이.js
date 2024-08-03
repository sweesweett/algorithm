function solution(dirs) {
    let set=new Set()
    let start=[0,0]
   let directions = {U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0]}
    let count=0
    for(let dir of dirs){
        let [dx,dy]=directions[dir]
        let [x,y]=[start[0]+dx,start[1]+dy]

        if(getDir(x,y)){
            if(!set.has(`${start[0]}/${start[1]}/${x}/${y}`)){
                 set.add(`${x}/${y}/${start[0]}/${start[1]}`)
                 set.add(`${start[0]}/${start[1]}/${x}/${y}`)
                 count++
            }
            start[0]=x
            start[1]=y  
        } 
    }
    return count
}



function getDir(x,y){
    return x>=-5&&y>=-5&&x<=5&&y<=5
}