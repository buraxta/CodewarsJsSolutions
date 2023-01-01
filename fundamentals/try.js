function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();

let x = varOne();
console.log(x); // You rock!