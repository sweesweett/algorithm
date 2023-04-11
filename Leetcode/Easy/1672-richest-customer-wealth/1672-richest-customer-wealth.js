/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let newArr=accounts.map(el=>el.reduce((a,b)=>a+b,0))
    return Math.max(...newArr)
    
};