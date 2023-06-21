function solution(name, yearning, photo) {
    let map = new Map()
    let arr=new Array(photo.length)
    for(let i=0;i<name.length;i++){
        if(yearning[i]){
             map.set(name[i],yearning[i])
        }
      
   }
    for(let i=0;i<photo.length;i++){
        let sum=0
        for(let j=0;j<photo[i].length;j++){
            if(map.has(photo[i][j])){
                sum+=map.get(photo[i][j])
            }
        }
        arr[i]=sum
    }
    return arr
}