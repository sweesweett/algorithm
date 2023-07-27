/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let row =[]
    let column = []
    let count=0
    for(let i=0;i<grid.length;i++){
        row.push(grid[i].join(','))
        let col=''
        for(let j=0;j<grid[0].length;j++){
            col+=grid[j][i]+','
        }
        column.push(col.slice(0,-1))

    }
    for(let r of row){
        for(let c of column){
            if(r===c){
                count++
            }
        }

    }
    return count
};