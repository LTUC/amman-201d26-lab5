'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  //eslint-disable-line
  let answer=a+b;
  return [answer,`The sum of ${a} and ${b} is ${answer}.`]
}

sum();
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply (a, b) {
  //eslint-disable-line
  let answer=a*b;
  return[answer,`The product of ${a} and ${b} is ${answer}.`]

  
}
multiply();

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

function sumAndMultiply(a, b, c) {
  
  let I= sum(a,b)[0];
  let II= sum(I,c)[0];
  let IX= multiply(a,b)[0]; 
  let IXX= multiply(IX,c)[0];
   return [II,IXX,`${a} and ${b} and ${c} sum to ${II}.`,`The product of ${a} and ${b} and ${c} is ${IXX}.`]

}
sumAndMultiply();

 testSumAndMultiply(4,7,5);
    

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

let testArray = [2, 3, 4];
function sumArray([x,y,z]) {

  let a = sum(x,y)[0];
  let b = sum(a,z)[0];
  return [b ,  x + "," + y + "," + z + " was passed in as an array of numbers, and " + b + " is their sum."]
  
}

sumArray([]);
testSumArray(testArray);


// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
 
  let product = multiply(multArr[0], multArr[1]);
  let productA = multiply(product[0], multArr[2]);
  productA[0] = productA[0];
  let result = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${productA[0]}.`;
  productA[1] = result;
  return productA;
  //return[`The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${productA[0]}.`];
 
}
//multiplyArray();
testMultiplyArray(testArray);
  //eslint-disable-line

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here

let testDynamicArray = [1, 2, 3, 4, 5]; 

function multiplyAnyArray(dynamicArray) {

  let TestMultiply1 = multiply(testDynamicArray[0],testDynamicArray[1]);
  let TestMultiply2 = multiply(TestMultiply1[0],testDynamicArray[2]);
  let TestMultiply3 = multiply(TestMultiply2[0],testDynamicArray[3]);
  let TestMultiply4 = multiply(TestMultiply3[0],testDynamicArray[4]);
  return [TestMultiply4[0], "The numbers 1,2,3,4,5 have a product of 120."]
  
}
testMultiplyAnyArray(testDynamicArray);

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
