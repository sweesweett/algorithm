//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
    // Write your code here
let obj={}
let max=[0,arr[0]]
for(let i =0;i<arr.length;i++){
    if(obj[arr[i]]!==undefined){
        obj[arr[i]]+=1
    }else{
         obj[arr[i]]=1
    }
}
for(let key in obj){
    if(obj[key]>max[0]){
        
        max[0]=obj[key]
        max[1]=key
    }else if(obj[key]===max[0]){
        if(key<max[1]){
            max[1]=key
        }
        
    }
}
return max[1]
}

