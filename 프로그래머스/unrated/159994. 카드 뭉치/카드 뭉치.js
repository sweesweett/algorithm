function solution(cards1, cards2, goal) {
const isFirst=[true,true]
for(let i =goal.length-1;i>=0;i--){
    if(cards1.length&&cards1[cards1.length-1]===goal[i]){
        cards1.pop()
        isFirst[0]=false
    }else if (cards2.length&&cards2[cards2.length-1]===goal[i]){
        cards2.pop()
        isFirst[1]=false
    }
    else if(isFirst[0]&&goal.indexOf(cards1[cards1.length-1])===-1){
        cards1.pop()
    }
     else if(isFirst[1]&&goal.indexOf(cards2[cards2.length-1])===-1){
        cards1.pop()
    }
    else{
        return 'No'
    }
}

return 'Yes'
}