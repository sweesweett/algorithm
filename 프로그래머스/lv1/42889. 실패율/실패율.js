function solution(N, stages) {
    let sortt =stages.sort((a,b)=>a-b)
    let nn =sortt.length
    let jong =1
    let obj={}
    let arr=[]
    for(let i=0;i<N;i++){
        arr.push(i+1)
        obj[i+1]=0
    }
    for(let i=0;i<sortt.length;i++){
        
        if(sortt[i]===sortt[i+1]){
            jong+=1
        }else{
            if(sortt[i]===N+1){
             break   
            }
            obj[sortt[i]]=jong/nn
            nn-=jong
            jong=1
        }
        
    }
    // return obj
    while(true){
        let isArrange=true
        let dd= arr.length
        for(let i =0;i<dd-1;i++){
         
               let tmp;
            if(obj[arr[i]]<obj[arr[i+1]]){
                tmp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=tmp
              
                isArrange=false
            }else if(obj[arr[i]]===obj[arr[i+1]]){
                if(arr[i]>arr[i+1]){
                     tmp=arr[i]
                    arr[i]=arr[i+1]
                     arr[i+1]=tmp
                    isArrange=false
                }
            }
            
          
            
        }
        if(isArrange){
            return arr
        }
        dd-=1
    }
    
}