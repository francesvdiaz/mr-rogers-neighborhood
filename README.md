Describe countNumbers(number)

Test: It will count up to a number"

Code: 
number= 10
changeNumber(number);
return result
console.log(result);

Output Expected: 0,1,2,3,4,5,6,7,8,9,10;
Passed?: Yes !


Describe changeNumbers(number,words)

Test: It will replace the number 1 in an array with "Beep!"

Code:
Words = ["Beep!"];
Number = 10
changeWord(number,words);
return result
console.log(result);
Output Expected: 0, beep!, 2, 3, 4, 5, 6, 7, 8, 9,10
Passed: Yes!

Test: It will replace all numbers including the digit 1 in an array with "Beep!"

Code:
Words = ["Beep!"];
Number = 20
changeWord(number,words);
return result
console.log(result);
Output Expected: 0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, 20
Passed: Yes!

Test: It will replace ALL numbers including the digit 2 in an array with "Boop!"

Code:
Words = ["Boop!"];
Number = 20
changeWord(number,words);
return result
console.log(result);
Output Expected: 0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!

Test: It will replace ALL numbers including the digit 3 in an array with "Won't you be my neighbor?"

Code:
Words = ["Wont you be my neighbor?"];
Number = 20
changeWord(number,words);
return result
console.log(result);
Output Expected: 0, beep!, boop!, won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, won't you be my neighbor?, beep!, beep!, beep!, beep!, beep!, beep!, boop!

Describe: reverseArray
Test: It will do the same as countNumbers, but decrease/reverse instead
Number = 30
reverseArray(number)
Number = 30
let result = [];
result.unshift(i);
return results;
console.log(result);
Output Expected: won't you be my neighbor?, boop!, boop!, boop!, boop!, boop!, boop!, won't you be my neighbor?, boop!, boop!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, won't you be my neighbor?, boop!, beep!, beep!, 9, 8, 7, 6, 5, 4, won't you be my neighbor?, boop!, beep!, 0
Passed:YES!
