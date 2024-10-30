/*
## PEDAC
**Problem**
input: what is the input?
output: what is the output?
What is the task? How would you rephrase the problem in your own words? 

The input is a number value.
The output is an array including each number AS A STRING, except for the word "fizz" for multiples of 3, "buzz" for multiples of 5 and "fizzbuzz" for multiples of 3 and 5.

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: 15
output: what would the output be for this input?
solution(n) = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"].


**Data Structure/Data Type**
What data structures will we use to solve this problem? 
for loops, strings, numbers


**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
for loop with array push method with if statements. if not a multiple convert the number to a string? using .toString()

**Code** 
Write your code implementing the algorithm!
*/
//Code

const solution = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i.toString());
    }
  }
  return array;
};
console.log(solution(15));
