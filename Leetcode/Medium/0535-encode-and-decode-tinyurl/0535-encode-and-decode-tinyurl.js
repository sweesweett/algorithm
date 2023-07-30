/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 const map = new Map()
var encode = function(longUrl) {
    let tiny = longUrl.split('/').at(-1)
    let short=''
    for(let i=0;i<tiny.length/2;i++){
        short+=Math.floor(tiny[i].charCodeAt()*Math.random()).toString(32)
    }
    map.set(short,longUrl)
    return `http://tinyurl.com/${short}`
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let rollback = shortUrl.split('/').at(-1)
    return map.get(rollback)
    
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */