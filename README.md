
# Mr. Roboger's Neighborhood
#### By *Frances Ojeda-Diaz*
#### Welcome to Mr. Roboger's Neighboroohd!

## Technologies Used:
1. HTML
2. CSS
3. Bootstrap
4. Javascript

## Description:
This is a program that utilizes arrays and loops to create a page where you can enter a number, and get a displayed array counting up to your desired number back to you. Mr. Roboger's loves to count but often makes mistakes, so there might be some beeps and boops in the array(but thats his function!).


## Setup/Installation Requirements:
1. Use my repository as a starting point: https://github.com/francesvdiaz/roboger-neighborhood
2. Click on green 'Code' button
3. Copy the link for the code
4. Open your terminal on your computer
5. Go to your desktop. Do this by entering $ cd ~/desktop
6. Enter $ git clone https://github.com/francesvdiaz/roboger-neighborhood
7. Now go to the portfolio directory you just made by entering $ cd portfolio
8. Now enter $ open .
9. Click on file in file finder and open in vscode by right clicking it.
10. Now you're looking at my code!
11. Open the index.html doc on a web browser.
12. Look at the page, inspect the code. Give Roboger a number and see what he can do.

## Known Bugs:
There are currently no known bugs, phew.

## License:
No license, yet! If you have any questions, email me at: vfrances.ww@gmail.com

## Github page link: 
Check it out! https://github.com/francesvdiaz/roboger-neighborhood

*Copyright(c)_1/09/2022_Frances-Ojeda-Diaz_*

## Tests done for Test Driven Developement (TDD)
#### This is a strategy used to build my program in the most straight forward and clean way.

## Describe countNumbers(number)

### Test: It will count up to a number

### Code: 
### number= 10
### changeNumber(number);
### return result
### console.log(result);

### Output Expected: 0,1,2,3,4,5,6,7,8,9,10;
### Passed?: Yes !


## Describe changeNumbers(number,words)

### Test: It will replace the number 1 in an array with "Beep!"

### Code:
### Words = ["Beep!"];
### Number = 10
### changeWord(number,words);
### return result
### console.log(result);
### Output Expected: 0, beep!, 2, 3, 4, 5, 6, 7, 8, 9,10
### Passed: Yes!

### Test: It will replace all numbers including the digit 1 in an array with "Beep!"

### Code:
### Words = ["Beep!"];
### Number = 20
### changeWord(number,words);
### return result
### console.log(result);
### Output Expected: 0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, 20
### Passed: Yes!

### Test: It will replace ALL numbers including the digit 2 in an array with "Boop!"

### Code:
### Words = ["Boop!"];
### Number = 20
### changeWord(number,words);
### return result
### console.log(result);
### Output Expected: 0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!

## Test: It will replace ALL numbers including the digit 3 in an array with "Won't you be my neighbor?"

### Code:
### Words = ["Wont you be my neighbor?"];
### Number = 20
### changeWord(number,words);
### return result
### console.log(result);
### Output Expected: 0, beep!, boop!, won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, won't you be my neighbor?, beep!, beep!, beep!, beep!, beep!, beep!, boop!
