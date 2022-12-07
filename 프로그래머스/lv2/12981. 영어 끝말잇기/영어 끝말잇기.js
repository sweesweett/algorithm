function solution(n, words) {
    var answer = [];
    let obj={[words[0]]:1}
    let eee=words[0][words[0].length-1]
    for(let i=1;i<words.length;i++){
        if(eee!==words[i][0]){
            return [(i+1)%n===0?n:(i+1)%n,Math.ceil((i+1)/n)]
        }else if(obj[words[i]]!==undefined){
            
            return [(i+1)%n===0?n:(i+1)%n,Math.ceil((i+1)/n)]
        }
        else{
            obj[words[i]]=1
            eee=words[i][words[i].length-1]
        }
    }

    return [0,0]
}