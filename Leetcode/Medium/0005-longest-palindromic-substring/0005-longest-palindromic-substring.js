/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
	if(s.length === 1) return s;
    let dp= Array.from(new Array(s.length+1),()=>new Array(s.length+1).fill(false))
    let max = '';
    
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    max=s[0]
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
          dp[i][i+1] = true
          max= s.substring(i, i + 2);
        }
    }

    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
            if(dp[i][j]&&max.length < (j - i + 1)) {
              max =s.substring(i, j + 1)
             } 
        }
    }
    
    return max;
}