/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    let newArr=Array.from(Array(mat.length),()=>new Array(mat.length))
    let rotate=[0,0,0,0]
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat.length;j++){
            if(mat[mat.length-1-j][i]===target[i][j]){
                rotate[1]+=1
            }
            if(mat[j][mat.length-1-i]===target[i][j]){
                rotate[2]+=1
            }
            if(mat[mat.length-1-i][mat.length-1-j]===target[i][j]){
                rotate[3]+=1

            }
            if(mat[i][j]===target[i][j]){
                rotate[0]+=1

            }
        }
    }
    for(let i =0;i<4;i++){
        if(rotate[i]===mat.length**2){
            return true
        }
    }
    return false
}