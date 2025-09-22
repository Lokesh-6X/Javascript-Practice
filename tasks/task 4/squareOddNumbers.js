const num = [1,3,5,7,9,10];
const oddNum = num.filter(n => n % 2==1);
const squareNum = oddNum.map(n => n*n);
console.log(squareNum);

//Or

const oddSquareNum = num.filter(n => n % 2==1).map(n => n*n);
console.log(oddSquareNum);