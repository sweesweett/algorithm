/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    let newBox= Array.from({length:box[0].length},()=>new Array(box.length).fill('.'))
    for(let i=0;i<box.length;i++){
        let bottom=box[0].length-1
        let q=[]
        for(let j=box[0].length-1;j>=0;j--){
            if(box[i][j]==='#'){
                if(!q.length){
                     newBox[j][box.length-1-i]='#'
                }else{
                    let idx= q.shift()
                    newBox[idx][box.length-1-i]='#'
                    q.push(j)
                    
                }

            }
            else if(box[i][j]==='*'){
                newBox[j][box.length-1-i]='*'
                bottom=j
                while(q.length&&q[0]>=bottom){
                    q.shift()
                }
                
            }else{
                q.push(j)
            }
        }
    }
    return newBox
};