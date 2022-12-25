function solution(k, dungeons) {
    const length = dungeons.length;
    const visited = Array(length).fill(false);
    let arr=[]
    let answer=0
    function dfs(k, count){
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }

   dfs(k, 0);

    return answer;
}