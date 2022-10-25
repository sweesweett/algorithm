function solution(my_string) {
    let answer = '';
    let big= my_string.toUpperCase()
    for(let i = 0 ; i < my_string.length;i++){
        if(my_string[i]===big[i]){
            answer+=big[i].toLowerCase()
        }else{
            answer+=big[i]
        }
        
    }
    return answer;
}