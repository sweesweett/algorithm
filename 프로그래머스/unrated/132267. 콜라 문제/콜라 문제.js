function solution(a, b, n) {
    let dd=0
    let nn=n
    while(nn>=a){
    
        dd+=Math.floor(nn/a)*b
        nn= Math.floor(nn/a)*b+nn%a
    }
    return dd
}