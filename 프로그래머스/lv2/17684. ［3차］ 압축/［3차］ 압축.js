function solution(msg) {
   const obj={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
   let word =msg[0]
   let lastIdx=0;
    let rightIdx=1
    let cc
    let dd=26
   let arr=[]
   if(msg.length===1){
       return [obj[msg[0]]]
   }
   
   while(true){
       if(lastIdx>=msg.length-1){
           return arr
       }
       if(obj[word]){
            rightIdx++
            cc=obj[word]
            word=msg.slice(lastIdx,rightIdx)
 
          
        

       }else{
           dd++
           arr.push(cc)
           obj[word]=dd
           lastIdx=rightIdx-1
           rightIdx=lastIdx+1
           word=word.slice(-1)
           if(lastIdx===msg.length-1){
               arr.push(obj[word])
               return arr
           }
       
       }
       
       if(rightIdx>msg.length){
           arr.push(cc)
           return arr
       }

     
   }
    return arr
}