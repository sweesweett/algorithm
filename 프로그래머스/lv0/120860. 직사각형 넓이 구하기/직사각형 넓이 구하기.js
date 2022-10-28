function solution(dots) {
const x={}
const y ={}
for (let i of dots){
    x[i[0]]=1
    y[i[1]]=1
}
    return Math.abs((Number(Object.keys(x)[0])-Number(Object.keys(x)[1]))*(Number(Object.keys(y)[0])-Number(Object.keys(y)[1])))
}