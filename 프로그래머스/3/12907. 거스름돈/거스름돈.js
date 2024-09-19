function solution(n, money) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    
    money.forEach(coin => {
        for (let i = coin; i <= n; i++) {
            dp[i] += dp[i - coin];
        }
    })
    
    return dp[n] % 1000000007
}