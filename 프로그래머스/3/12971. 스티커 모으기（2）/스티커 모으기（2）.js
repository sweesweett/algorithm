function solution(stickers) {
    const n = stickers.length
    if (n === 1) return stickers[0]
    function getStickerSum(start,end) {
        const dp = new Array(n).fill(0);
        dp[start] = stickers[start];
        dp[start+1] = Math.max(stickers[start], stickers[start+1])

        for (let i = start+2; i < end; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + stickers[i])
        }
        return dp[end-1]
    }

    return Math.max(getStickerSum(0,n-1), getStickerSum(1,n));
}
