function solution(sides) {
    let min = Math.min(...sides)
    let max = Math.max(...sides)
    let sum = sides[0]+sides[1]
    
    return (sum-1-max)+(max-(max-min))
}