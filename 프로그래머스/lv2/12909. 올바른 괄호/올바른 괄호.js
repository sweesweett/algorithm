function solution(s){
    var answer = true;
    let newS=s
    let p=0
    if(s.length%2){
        return false
    }
    if(s[0]===')'||s[s.length-1]==='('){
        return false
    }
    for(let i =0;i<s.length;i++){
        if(s[i]==='('){
            p+=1
        }else{
            p-=1
        }
        if(p<0)return false
    }
    if(p>0){
        return false
    }

    return answer
}