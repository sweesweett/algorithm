/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let directions={
        right:[0,1],
        bottom:[1,0],
        left:[0,-1],
        top:[-1,0],
    }
    let map=new Map([['top','right'],['right','bottom'],['bottom','left'],['left','top']])
    let rows=matrix.length,cols=matrix[0].length
    let a=0
    let b=0
    let answer=[]
    while(true){
        if(a<0||b<0||a>=rows||b>=cols||matrix[a][b]===-101){
                     break
        }
        for(let key in directions){
           if(a<0||b<0||a>=rows||b>=cols||matrix[a][b]===-101){
                     break
            }
            answer.push(matrix[a][b])
            matrix[a][b]=-101
            let [dx,dy]= directions[key]
            while(true){
                 let x=dx+a,y=dy+b
                if(x<0||y<0||x>=rows||y>=cols||matrix[x][y]===-101){
                     break
                }
                answer.push(matrix[x][y])
                matrix[x][y]=-101
                a=x
                b=y
            }

            let [q,w]=directions[map.get(key)]
            a+=q
            b+=w
        }
    }    
    return answer
};