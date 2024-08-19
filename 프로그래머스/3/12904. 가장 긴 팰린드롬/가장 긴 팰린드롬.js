function solution(s){
if(s.length === 1) return 1;
    let dp= Array.from(new Array(s.length+1),()=>new Array(s.length+1).fill(false))
    let max = s[0]
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
          dp[i][i+1] = true
          max= s.slice(i, i + 2);
        }
    }
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
            if(dp[i][j]&&max.length < (j - i + 1)) {
              max =s.slice(i, j + 1)
             } 
        }
    }
    
    return max.length;
}