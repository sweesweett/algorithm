
function solution(my_string) {
    return my_string.split("").map((v, index) => my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase()).join("");
}
