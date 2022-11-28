# Task 1 'npm'
* Implement app that contains at least one dependency and one dev dependency

# Task 2 'Coercion operations'
* Implement app that contains at least one dependency and one dev dependency

# Task 3 'Objects'
* Create repo “add”
* Implement function that can “add” objects
```
example: a = {x: 1} b = {x: 2, y: 2} 
add(a, b) returns {x: 3, y: 2}
add(a, b, a) returns {x: 4, y: 2}
```
<br>* Create additional function that can intersect object

# Task 4 'Functions'
*
```
function randn_bm() {  
    let u = 0, v = 0;  
    while (u === 0) u = Math.random();  
    while (v === 0) v = Math.random();  
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}; 
```
* Using provided function generate 10 numbers. Create object with the keys related to the generated numbers and value as a quantity of corresponding number. Display numbers distribution as a table using template literal string.
* Example of object: {0: 5, 1: 3, 2: 2}
## P.S.
Gaussian distribution on such a sample (10 numbers) is not obvious. It is better to take 50 numbers, so that the prevalence of 0 and numbers close to it is more noticeable.

# Task 5 'Functions2'
* Implement function range(min,max) that can return sum of integer numbers in range [min,max]
* Consider edge cases: result is greater than Number.MAX_SAFE_INTEGER, argument is not a number, min > max, etc.
* *For performance reason add memoization mechanism

# Task 6 'Memory management'
* Implement program to print all permutations of a given string
```
Example  
Input: ABC
Output: ABC, ACB, BAC, BCA, CAB, CBA
```
* *Print all permutations in sorted (lexicographic) order

# Task 7 'Inheritance'
* Describe base class Entity that can store name
* Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
* Add example of usage of these classes, e.g., create some instances, display data related to them

# Task 8 'Arrays'
* Given array of numbers [x]. Find “approx” [y] array where yi = xi-1 + xi+1
```
Example: [1, 2, 3, 4] => [2, 4, 6, 3]
```
* *Write function that can perform this calculation for multidimensional arrays

# Task 9 'DOM'
* Using js construct on page Tic-Tac-Toe layout
* Add possibility to interact with layout by mouse click (add “X” or “O”)
* Add module that can write down on page game result (1st win, 2nd win or draw)

# Task 10 'Events'
* Add to html page table with header and some rows
* Add to header event listener to implement sorting functionality across the table data (alphabetical)
* Add to cells user interaction feature (click and edit text)

#  Task 11 'Asynchrony'
* Develop 4 functions that can perform operations +, -, *, / but return result with some random delay (> than 1sec)
* Create stack calculation module that can interact with mentioned before functions and handle Reverse Polish notation input
* Calculate “1 2 + 3 × 4 +”

## Instructions
* For division use ":"
* Enter all numbers and signs of operations separated by a space. Example: '2 2 +'
* To display the result, the expression must contain calculation operations (+, -, *, :)


# Task 12 'Network interaction'
* Develop page with two dropdowns "Title" and "Category"
* Values of selections should invoke render of data from https://api.publicapis.org/
* Handle possible error cases

## Attention
In entrie no "title" only "API" (but, when specifying the URL, the "title" is used)

# Task 13 'Modern js'
* Convert your code from previous HT by the Babel transpiler to ES5 version
* Check working status of app for different browsers

## Сhecked on:
* IE 10, 11
* Edge
* Firefox
* Opera
* Chrome
* Яндекс

# Task 14 'Module principle'
* Split your code from previous HM to some modules (at least 2)
* Implement dynamic import for module
# Task 15 'User data manipulation'
* Develop page with stored state that can “restore” user name and predefined theme (dark or light)
* Apply this module to existing app (from previous task)