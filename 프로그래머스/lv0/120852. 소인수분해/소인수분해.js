function solution(n) {
    let arr=[]
    if(n%2===0){
        arr.push(2)
        while(n%2===0){
            n/=2
        }
    }
    if(n%3===0){
        arr.push(3)
         while(n%3===0){
            n/=3
        }
    }
    console.log(n)
    for(let i =3; i<=n;i+=2){
        if(n%i===0){
            arr.push(i)
            // if(i%3){
            //     arr.push(i)
            // } if(Math.floor(n/i)%2&&Math.floor(n/i)%3){
            //     arr.push(Math.floor(n/i))
            // }
        }   
    }
    if(arr.length===0){
        return [n]
    }
    arr.sort((a,b)=>a-b)
    
    return arr.filter(el=>gg(el))
}
function gg(n){
    for (let i =5;i<=n**0.5;i+=2){
        if(n%i===0){
            return false
        }
    }
    return true
    let arr=[]
    if(n%2===0){
        arr.push(2)
    }
    if(n%3===0){
        arr.push(3)
    }
    for(let i =3; i<=n**0.5;i+=2){
        if(n%i===0){
            if(i%3){
                arr.push(i)
            } if(Math.floor(n/i)%2&&Math.floor(n/i)%3){
                arr.push(Math.floor(n/i))
            }
        }   
    }
    if(arr.length===0){
        return [n]
    }
    arr.sort((a,b)=>a-b)
    
    return arr.filter(el=>gg(el))
}
function gg(n){
    for (let i =5;i<=n**0.5;i+=2){
        if(n%i===0){
            return false
        }
    }
    return true
    
}