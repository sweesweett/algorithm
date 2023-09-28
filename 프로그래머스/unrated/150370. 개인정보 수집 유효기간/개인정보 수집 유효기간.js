function solution(today, terms, privacies) {
    //파기해야할거 return 
   const todayDate=today.split('.').map(Number)
   const termObj={}
   const ans=[]
   for(let term of terms){
       let [kind, month]= term.split(' ')
        termObj[kind]= Number(month)   
   }
   for(let i=0;i< privacies.length;i++){
       const [date,term]= privacies[i].split(' ')
       const dateArr=date.split('.').map(Number)

       if(isExpired(todayDate,afterTerm(termObj[term],dateArr))){
           ans.push(i+1) 
       }
   } 
   

      return ans;
}
function isExpired(curr,compare){
    const [currY,currM,currD]= curr;
    const [compY,compM,compD]=compare;
    if(currY<compY){
        return false
    }
    if(currY>compY){
        return true
    }
    if(currM>compM){
        return true
    }
    if(currM<compM){
        return false
    }
    if(currD>compD){
        return true
    }
    return false
    
    
}


function afterTerm(term,date){
    //여기수정 필
    let [year,month,day]=date

    month+=term
    year+=Math.trunc(month/12)
    month=month%12
    if(day===1){
        day=28
        month-=1
    }else{
        day-=1
    }
    if(month===0){
        month=12
        year-=1
    }
    
    
    return [year,month,day]
}