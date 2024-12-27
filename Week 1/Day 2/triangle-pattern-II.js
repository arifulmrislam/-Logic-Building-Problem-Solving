/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
Approach:
We can see that we need to run a loop for a row number of times. We need to run a loop for 5 rows in the example here. This forms the external loop.
We need to run a loop to print n numbers in each row, where n is the row number. This forms the internal loop.
In the example above, we have 5 rows. For 5 rows, we need an external loop that goes from n = 1 to n = 5 (i.e. no of rows). We need to print the row number n number of times for each row, where n is the row number.
Example : For the 5th row, n = 5. The internal loop goes from num = 1 to num = 5 and prints the row number (i.e. 5). The 5th row becomes: 5 5 5 5 5.
*/