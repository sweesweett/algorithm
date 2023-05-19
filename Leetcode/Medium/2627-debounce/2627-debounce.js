//자바스크립트 문제
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let time=null
    return function(...args) {

        if(time){
            clearTimeout(time)
        }
        time=setTimeout(()=>{fn(...args)},t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */