/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let answer=[]
    let flat= mat.flat()
    if(flat.length%r*c){
        return mat
    }
    let goal =flat.length/r
    for(let i=0;i<r;i++){
        let dd=[]
        for(let j=i*goal;j<(i+1)*goal;j++){
            dd.push(flat[j])
        }
        answer.push(dd)

    }
   return answer
};