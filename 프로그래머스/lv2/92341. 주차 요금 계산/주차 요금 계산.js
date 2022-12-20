function solution(fees, records) {
    let obj={}
    let obj2={}
 
    for(let i =0;i<records.length;i++){
        let dd=records[i].split(' ')
        if(dd[2]==='IN'){
            obj[dd[1]]=dd[0]
            
        }else{
              
            if(obj2[dd[1]]===undefined){
           
             obj2[dd[1]]= ee(obj[dd[1]],dd[0])
                
                
            }else{
              
                 obj2[dd[1]]+=ee(obj[dd[1]],dd[0])
                
            }
            delete obj[dd[1]]
            
        }
        
    }
    for(let key in obj){
        if(obj2[key]===undefined){
              obj2[key]=ee(obj[key],'23:59') 
            }else{
        
                  obj2[key]+=ee(obj[key],'23:59')
                
            }
    }
    return Object.keys(obj2).sort((a,b)=>Number(a)-Number(b)).map(el=>cc(obj2[el],fees))
      }
function ee(iN,out){
    let outArr=out.split(':')
    let inArr =iN.split(':')
    let time=(Number(outArr[0])-Number(inArr[0]))*60+ Number(outArr[1]-inArr[1])
    return time
    
}
function cc(time,fees){
    if(time<=fees[0]){
        return fees[1]
    }else {
      
        return fees[1]+Math.ceil((time-fees[0])/fees[2])*fees[3]
    }
    // }else{
    //     return Math.ceil(time/fees[2])*fees[3]
    // }

}