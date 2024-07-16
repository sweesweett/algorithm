function solution(maps) {
  maps = maps.map(el => el.split(''))
  let ans = 0

  function bfs(startI, startJ, end) {
    let queue = [[[startI, startJ], 0]];
    let directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let visited = Array.from({ length: maps.length }, () =>
      Array(maps[0].length).fill(false)
    );
    visited[startI][startJ] = true

    while (queue.length) {
      let [[i, j], sum] = queue.shift()
      if (maps[i][j] === end) {
        return [[i, j], sum]
      }

      for (let [dx, dy] of directions) {
        let newI = i + dx
        let newJ = j + dy

        if (
          newI >= 0 &&
          newI < maps.length &&
          newJ >= 0 &&
          newJ < maps[0].length &&
          !visited[newI][newJ] &&
          maps[newI][newJ] !== 'X'
        ) {
          visited[newI][newJ] = true;
          queue.push([[newI, newJ], sum + 1])
        }
      }
    }

    return [[], -1]
  }

  let lIdx;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 'S') {
        let [idx, val] = bfs(i, j, 'L')
        if (val === -1) {
          return -1
        }
        ans += val
        lIdx = idx
        break
      }
    }
  }

  let val = bfs(lIdx[0], lIdx[1], 'E')[1];
  return val !== -1 ? val + ans : -1;
}
