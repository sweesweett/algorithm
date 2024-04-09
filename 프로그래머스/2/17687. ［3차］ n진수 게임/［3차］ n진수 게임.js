function solution(n, t, m, p) {
    //진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.
    let answer=''
    let num=0
    let str= num.toString(n) 
    let idx=0
    for(let j=0;j<m*(t-1)+p;j++){
        if((j%m)+1===p){
            answer+=str[idx]
        }
        idx++
        if(str.length===idx){
            num++
            str=num.toString(n)
            idx=0
        }
        
    }
    return answer.toUpperCase()
    
}