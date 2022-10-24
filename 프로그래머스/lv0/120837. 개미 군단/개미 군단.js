function solution(hp) {
    let aAnts = Math.floor(hp/5)
    let bAnts= Math.floor((hp-aAnts*5)/3)
    let ants =(hp-aAnts*5)%3
    
    return bAnts+aAnts+ants
}