var quiz1Array = [ 15, 17 , -23 , 47 , -26 , 19];
function getMaxNumber(numbersArray){
    var tmpMax = numbersArray[0];
    for (let index = 1; index < numbersArray.length; index++) {
        if(numbersArray[index] > tmpMax)
            tmpMax = numbersArray[index];
    }
    return tmpMax;
}
console.log("pasuxi : " + getMaxNumber(quiz1Array));


function getPositiveNumbersAverage(numbersArray){
    tmpArr = [];
    numbersArray.forEach(element => {
        if(element > 0)
            tmpArr.push(element);
    });

    return (tmpArr.reduce(function(a, b){
        return a + b;
    }, 0) / tmpArr.length);
}
console.log("pasuxi 2 : " + getPositiveNumbersAverage(quiz1Array));

function getTopStudents(studentsArray1, studentsArray2){
    const fullArr = [...studentsArray1, ...studentsArray2];
    const sortedArr = fullArr.sort((a, b) => { return b.gpa - a.gpa });
    
    var tmpIndex = 0;
    var result = [];
    for (let index = 0; index < sortedArr.length; index++) {
        result.push(sortedArr[index]);
        if((sortedArr[index] != sortedArr[index+1]) && tmpIndex < 5){
            tmpIndex = tmpIndex + 1;
        }
        else{
            break;
        };
        
    }
    return result;
    

}


console.log(
    "third task:",
    getTopStudents(
      [
        { id: 1, name: "asdsa daad", gpa: 4 },
        { id: 2, name: "asdsa daad", gpa: 2.5 },
        { id: 3, name: "asdsa daad", gpa: 1 },
        { id: 4, name: "asdsa daad", gpa: 3.97 },
      ],
      [
        { id: 5, name: "asdsa daad", gpa: 3.5 },
        { id: 6, name: "asdsa daad", gpa: 2.5 },
        { id: 7, name: "asdsa daad", gpa: 0.3 },
        { id: 8, name: "asdsa daad", gpa: 4 },
    ]
    )
  );