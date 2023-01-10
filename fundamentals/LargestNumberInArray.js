function largestOfFour(arr) {
    let winnerArr = [];
    for (let i = 0; i < arr.length; i++) {
        let bigInt = -100;
        for (let j = 0; j < arr[i].length; j++) {
            if (bigInt < arr[i][j]) {
                bigInt = arr[i][j];
            }           
        }
        winnerArr.push(bigInt);
    }
    return winnerArr;
  }
  

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))