function solution(cards1, cards2, goal) {
const isFirst=[true,true]
for(let i =goal.length-1;i>=0;i--){
    if(cards1[cards1.length-1]===goal[i]){
        cards1.pop()
        isFirst[0]=false
    }else if (cards2[cards2.length-1]===goal[i]){
        cards2.pop()
        isFirst[1]=false
    }
    else if(isFirst[0]&&goal.indexOf(cards1[cards1.length-1])===-1){
        cards1.pop()
        i++
    }
     else if(isFirst[1]&&goal.indexOf(cards2[cards2.length-1])===-1){
        cards2.pop()
         i++
    }
    else{
        return 'No'
    }
}

if(cards1.length+cards2.length){
    return 'No'
}
return 'Yes'
}
