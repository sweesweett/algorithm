/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    let row=students.length
    let col=mentors.length
    let max=0
    let backtracking=(start,set,sum)=>{
        if(start>=row){
          max=Math.max(sum,max)
          return;
        }
        for(let i=0;i<col;i++){
          if(set.has(i)){
            continue
          }
          let tmp=0
          for(let j=0;j<mentors[0].length;j++){
            tmp+=!(students[start][j]^mentors[i][j])
          }
          set.add(i)
          backtracking(start+1,set,sum+tmp)
          set.delete(i)
        }
    }
    backtracking(0,new Set(),0)

    return max
};