# Task 4
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
