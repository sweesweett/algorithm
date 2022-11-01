function solution(numbers) {
    let gg={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
    let ggKey = Object.keys(gg)
    for(let i=0;i<10;i++){
    numbers= numbers.replaceAll(ggKey[i],gg[ggKey[i]])
}
    return Number(numbers)
    }