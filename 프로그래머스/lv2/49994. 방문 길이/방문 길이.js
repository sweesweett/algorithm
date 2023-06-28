function solution(dirs) {
    let dir=[5,5]
    let set = new Set()
    let dd=[]
    for(let i =0;i<=10;i++){
        let arr=[]
        for(let j=0;j<=10;j++){
            arr.push(10)
        }
        dd.push(arr)
    }
    let count=0
    
    for(let i =0;i<dirs.length;i++){
        let dirr=dir.join('')
        if(dirs[i]==='L'){
            getdir(dir,-1,0)
        }else if(dirs[i]==='U'){
            
            getdir(dir,0,1)
        }else if(dirs[i]==='D'){
            getdir(dir,0,-1)
        }else{
            getdir(dir,1,0)
        }
        let curr= dir.join('')
        if(curr===dirr){
            continue
        }
        if(!set.has(dirr+curr)&&!set.has(curr+dirr)){
            set.add(dirr+curr)
            set.add(curr+dirr)
            count++
        }

        
    }
    return count
}
function getdir(dir,x,y){
    dir[0]+=x
    dir[1]+=y
    if(dir[0]>10){
        dir[0]=10
    }else if(dir[0]<0){
        dir[0]=0
    }else if(dir[1]>10){
        dir[1]=10
    }else if(dir[1]<0){
        dir[1]=0
    }
}