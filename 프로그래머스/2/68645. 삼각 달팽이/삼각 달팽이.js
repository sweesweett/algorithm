function solution(n) {
    let arr = Array.from(new Array(n), (_, i) => new Array(i + 1).fill(0));
    let total = (n * (n + 1)) / 2;
    let num = 1;
    let row = 0, col = 0;
    let direction = 'down';
    
    while (num <= total) {
        arr[row][col] = num;
        num++;
        if (direction === 'down') {
            if (row === n - 1 || arr[row + 1][col] !== 0) {
                direction = 'right';
                col++;
            } else {
                row++;
            }
        } else if (direction === 'right') {
            if (col === row || arr[row][col + 1] !== 0) {
                direction = 'up';
                row--;
                col--;
            } else {
                col++;
            }
        } else if (direction === 'up') {
            if (arr[row - 1][col - 1] !== 0) {
                direction = 'down';
                row++;
            } else {
                row--;
                col--;
            }
        }
    }

    return arr.flat();
}