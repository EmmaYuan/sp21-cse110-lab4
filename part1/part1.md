# sp21-cse110-lab4 part1
## Part 1a
1. 20
2. 20
3. 20 
4. ReferenceError because result can only be accessed within the if block and line 13 is outside the scope. 
5. TypeError because const variables cannot be reassigned. 
6. Error because result can only be accessed within the if block and line 13 is outside the scope. 

## Part 1b
1. 3 because when var i is incremented to 3 on line 6, the for loop stops and line 12 is executed right away. 
2. 150 because var discountPrices is created every time the for loop runs and it is assigned to the discounted price when price = 300 and discount = 0.5.
3. 150 because at the end, var finalPrice is updated to the discounted price of the last item in the list.
4. \[50, 100, 150\] because this is the var list of discounted prices when the original prices are \[100, 200, 300\] and discount = 0.5. 
5. ReferenceError because i can only be accessed within the for loop block and line 12 is outside the scope. 
6. Error because because discountedPrice can only be accessed within the for loop block and line 13 is outside the scope. 
7. 150 because finalPrice can be accessed within the entire function block and line 14 is within the scope. 
8. \[50, 100, 150\] because discounted can be accessed within the entire function block and line 16 is within the scope. 
9. ReferenceError because i can only be accessed within the for loop block and line 11 is outside the scope. 
10. 3 because const length is set to the length of the prices list initially and not changed.
11. \[50, 100, 150\] because discounted can be accessed within the entire function block and line 14 is within the scope. It's okay to push elements to the const list since this action is just to add elements to the list that the constant points to, instead of modifying its values. 
12. 
- student.name
- student\['Grad Year'\]
- student.greeting()
- student\['Favorite Teacher'\].name
- student.courseLoad\[0\]
13. 
- '32' because 2 maps to its string representation
- 1 because '3' maps to its int representation
- 3 because null maps to 0
- '3null' because null maps to its string representation
- 4 because true maps to 1
- 0 because false and null both map to 0
- '3undefined' because undefined maps to its string representation
- NaN because undefined maps to NaN and '3' - NaN = NaN
14.
- true because '2' maps to its int representation
- false because '2' and '12' map to their exact int representation
- true because '2' maps to its int representation
- false because === strictly checks equality. 2 and '2' are different types
- false because true maps to 1
- true because 2 is non-false and Boolean(2) returns True
15. == compares two variables without checking their types and === compares two variables with checking their types
16. see part1b-question16.js
17. \[2, 4, 6\] because inside the for loop, function doSomething is called every time and the doubled value of each element in the array is then pushed to the var newArr. 
18. see part1b-question18.js
19. 
1<br/>
4<br/>
3<br/>
2
