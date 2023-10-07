function solution(n) {
    let answer=''
    let map =new Map([[0,4],[1,1],[2,2]])
    let map2 = new Map([[0,''],[1,'1'],[2,'2'],[3,'4']])
    // for(let i=4;i<=n/2;i++){
    //    getNewNumber(map,map2,i)
    // }
    getNewNumber(map,map2,n)
    return map2.get(n)

}

function getNewNumber(map,map2,i){
     let ddd = map.get(i%3)+''
        let trunc = Math.trunc(i/3)
        if(i%3!==0){
             if(!map2.has(trunc)){
                getNewNumber(map,map2,trunc)
            }
            ddd=map2.get(trunc)+ddd
        }else {
              if(!map2.has(trunc-1)){
                 getNewNumber(map,map2,trunc-1)
             }
            ddd=map2.get(trunc-1)+ddd
        }
        map2.set(i,ddd)
}
