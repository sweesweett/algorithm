function solution(str1, str2) {
    let one = str1.toLowerCase()
    let two= str2.toLowerCase()
    let dd={}
    let arr=[]
    let arr2=[]
    let count=0
    for(let i=0;i<one.length-1;i++){
        if(one[i].match(/[^a-z]/)||one[i+1].match(/[^a-z]/)){
            continue
        }
        if(one[i]===' '||one[i+1]===' '){
            continue
        }
        if(dd[one.slice(i,i+2)]!==undefined){
             dd[one.slice(i,i+2)]+=1
        }else{
            dd[one.slice(i,i+2)]=1
        }
        count++
       
    }
    for(let i=0;i<two.length-1;i++){
       if(two[i].match(/[^a-z]/)||two[i+1].match(/[^a-z]/)){
           continue
       }
          if(two[i]===' '||two[i+1]===' '){
            continue
        }
        // console.log(two.slice(i,i+2))
        if(dd[two.slice(i,i+2)]>0){
            arr.push(two.slice(i,i+2))
            dd[two.slice(i,i+2)]-=1 
        
        }
        count++

    }
    if(count===0){
        return 65536
    }
    return Math.floor(arr.length/(count-arr.length)*65536)
}