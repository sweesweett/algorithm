/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  
    let num=0
    while(students.length&&sandwiches.length){
        if(num>=students.length){
            break
        }
        if(students[0]===sandwiches[0]){
            students.shift()
            sandwiches.shift()
            num=0
        }else{
            students.push(students.shift())
            num++
        }        

    }
    return num
    
};