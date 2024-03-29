#  <strong> Coderbyte Challenges, Solutions and Formulas (JavaScript)
![Coderbyte](https://github.com/alikartalonline/Coderbyte-Challenges-Solutions-Formulas-JS/blob/main/gif/alikartalonline.gif)

<br>



<hr>
<br>


>First Factorial
><br>
>First Reverse
><br>
>Find Intersection
><br>
>Longest Word
><br>
>Questions Marks
><br>
>Prime Time
><br>
>Consonant Count
><br>
>Check Nums
><br>
>Palindrome Two
><br>
>Ex Oh
><br>
>Consecutive
><br>
>Swap Case
><br>
>ThreeFive Multiples
><br>
>Power Set Count
><br>
>Even Pairs
><br>
>Simple Evens
><br>
>Happy Numbers
><br>
>Fibonacci Checker
><br>
>Number Reverse
><br>
>Nearest Smaller Values
><br>
>Largest Four
><br>
>Matrix Spiral
><br>
>Math Challenge
><br>
>Array Challenge
><br>
>Prime Mover
><br>
>Simple Adding
><br>
>Searching Challenge (or Letter Count)
><br>
>Front-end Challenge
><br>
>Letter Changes
><br>
>Two Sum
><br>
>Distinct List
><br>
>Letter Capitalize
><br>
>Math Challenge (2)
><br>
>String Challenge
><br>
>Caesar Cipher
><br>
>Math Challenge (3)
><br>
>String Challenge (2)
><br>
>Meandering Array
><br>
>Generator Primes 
><br>
>
><br>



<br>
<hr>
<br>

## First Factorial 
<br>
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
<br>
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

For the test cases, the range will be between 1 and 18 and the input will always be an integer.

<br>

Examples

```

Input: 4

Output: 24


Input: 8

Output: 40320

```
<br>
<hr>
<br>


## First Reverse 
<br>
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
<br>
 For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.


<br>

Examples

```

Input: "coderbyte"

Output: etybredoc



Input: "I Love Code"

Output: edoC evoL I

```
<br>
<hr>

<br>

## Find Intersection
<br>

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.


<br>

Examples

```

Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

Output: 1,4,13



Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]

Output: 1,9,10

```
<br>
<hr>


<br>

## Longest Word
<br>

Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"


<br>

Examples

```

Input: "Hello world123 567"

Output: world123



Input: "fun&!! time"

Output: time

```
<br>
<hr>

<br>

## Questions Marks
<br>

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.


<br>

Examples

```

Input: "aa6?9"
Output: false


Input: "acc?7??sss?3rr1??????5"
Output: true

```
<br>
<hr>
<br>

## Prime Time
<br>

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

<br>

Examples

```
Input: 19
Output: true


Input: 110
Output: false

```
<br>
<hr>
<br>

## Consonant Count 
<br>

Have the function ConsonantCount(str) take the str string parameter being passed and return the number of consonants the string contains.

<br>

Examples

```

Input: "Hello World"
Output: 7


Input: "Alphabets"
Output: 6

```
<br>
<hr>
<br>

## Check Nums
<br>

Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

<br>

Examples

```

Input: 3 & num2 = 122
Output: true


Input: 67 & num2 = 67
Output: -1

```
<br>
<hr>
<br>

## Palindrome Two
<br>

Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. 

For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

<br>

Examples

```

Input: "Noel - sees leon"
Output: true


Input: "A war at Tarawa!"
Output: true

```
<br>
<hr>
<br>

## Ex Oh
<br>

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. 

For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

<br>

Examples

```

Input: "xooxxo"
Output: true


Input: "x"
Output: false

```
<br>
<hr>
<br>

## Consecutive
<br>

Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. 

For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.  

<br>

Examples

```

Input: new int[] {5,10,15}
Output: 8


Input: new int[] {-2,10,4}
Output: 10

```
<br>
<hr>
<br>

## Swap Case
<br>

Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.  

<br>

Examples

```

Input: "Hello-LOL"
Output: hELLO-lol


Input: "Sup DUDE!!?"
Output: sUP dude!!?

```
<br>
<hr>
<br>

## ThreeFive Multiples
<br>

Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.

<br>

Examples

```

Input: 6
Output: 8


Input: 1
Output: 0

```
<br>
<hr>
<br>

## Power Set Count
<br>

Have the function PowerSetCount(arr) take the array of integers stored in arr, and return the length of the power set (the number of all possible sets) that can be generated. For example: if arr is [1, 2, 3], then the following sets form the power set:

[] <br>
[1] <br>
[2] <br>
[3] <br>
[1, 2] <br>
[1, 3] <br>
[2, 3] <br>
[1, 2, 3] <br>

You can see above all possible sets, along with the empty set, are generated. Therefore, for this input, your program should return 8.


<br>

Examples

```

Input: new int[] {1, 2, 3, 4}
Output: 16


Input: new int[] {5, 6}
Output: 4

```
<br>
<hr>
<br>

## Even Pairs
<br>

Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.


<br>

Examples

```

Input: "3gy41d216"
Output: true


Input: "f09r27i8e67"
Output: false

```
<br>
<hr>
<br>

## Simple Evens
<br>

Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.


<br>

Examples

```

Input: 2222220222
Output: true


Input: 20864646452
Output: false

```
<br>
<hr>
<br>

## Happy Numbers
<br>

Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.


<br>

Examples

```

Input: 1
Output: true

Input: 101
Output: false

```
<br>
<hr>
<br>

## Fibonacci Checker
<br>

Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

<br>

Examples

```

Input: 34
Output: yes

Input: 54
Output: no

```
<br>
<hr>
<br>

## Number Reverse
<br>

Have the function NumberReverse(str) take the str parameter being passed which will be a string of numbers, and return a new string with the numbers in reverse order.

<br>

Examples

```

Input: "1 2 3"
Output: 3 2 1

Input: "10 20 50"
Output: 50 20 10

```
<br>
<hr>
<br>

## Nearest Smaller Values
<br>

Have the function NearestSmallerValues(arr) take the array of integers stored in arr, and for each element in the list, search all the previous values for the nearest element that is smaller than (or equal to) the current element and create a new list from these numbers. If there is no element before a certain position that is smaller, input a -1. For example: if arr is [5, 2, 8, 3, 9, 12] then the nearest smaller values list is [-1, -1, 2, 2, 3, 9]. The logic is as follows:

For 5, there is no smaller previous value so the list so far is [-1]. For 2, there is also no smaller previous value, so the list is now [-1, -1]. For 8, the nearest smaller value is 2 so the list is now [-1, -1, 2]. For 3, the nearest smaller value is also 2, so the list is now [-1, -1, 2, 2]. This goes on to produce the answer above. Your program should take this final list and return the elements as a string separated by a space: -1 -1 2 2 3 9
<br>

Examples

```

Input: new int[] {5, 3, 1, 9, 7, 3, 4, 1}
Output: -1 -1 -1 1 1 1 3 1


Input: new int[] {2, 4, 5, 1, 7}
Output: -1 2 4 -1 1

```
<br>
<hr>
<br>

## Largest Four
<br>

Have the function LargestFour(arr) take the array of integers stored in arr, and find the four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21, so your program should return 21. 

If there are less than four numbers in the array your program should return the sum of all the numbers in the array.
<br>

Examples

```

Input: new int[] {1, 1, 1, -5}
Output: -2

Input: new int[] {0, 0, 2, 3, 7, 1}
Output: 13

```
<br>
<hr>
<br>

## Matrix Spiral
<br>

Have the function MatrixSpiral(strArr) read the array of strings stored in strArr which will represent a 2D N matrix, and your program should return the elements after printing them in a clockwise, spiral order. You should return the newly formed list of elements as a string with the numbers separated by commas. 

For example: if strArr is "[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]" then this looks like the following 2D matrix:

1 2 3 <br>
4 5 6 <br>
7 8 9 <br>

So your program should return the elements of this matrix in a clockwise, spiral order which is: 1,2,3,6,9,8,7,4,5

<br>

Examples

```

Input: new String[] {"[1, 2]", "[10, 14]"}

Output: 1,2,14,10

1, 2
10, 14

--

Input: new String[] {"[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"}

Output: 4,5,6,5,2,9,2,4,5,1,1,2

4, 5, 6, 5
1, 1, 2, 2
5, 4, 2, 9

```
<br>
<hr>
<br>

## Math Challenge
<br>

Have the function MathChallenge(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.


<br>

Examples

```

Input: 7 & num2 = 3
Output: 1


Input: 36 & num2 = 54
Output: 18

```
<br>
<hr>
<br>


## Array Challenge
<br>

Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.


<br>

Examples

```

Input: [5,5,2,2,1]

Output: 5


Input: [3,4,1,6,10]

Output: -1

```
<br>
<hr>
<br>

## Prime Mover
<br>

Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.


<br>

Examples

```

Input: 9
Output: 23

Input: 100
Output: 541

```
<br>
<hr>
<br>

## Simple Adding
<br>

Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

<br>

Examples

```

Input: 12
Output: 78

Input: 140
Output: 9870

```
<br>
<hr>
<br>

## Searching Challenge (or Letter Count)
<br>

Have the function SearchingChallenge(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

<br>

Examples

```

Input: "Hello apple pie"
Output: Hello

Input: "No words"
Output: -1

```
<br>
<hr>
<br>

## Front-end Challenge
<br>

Front-end Challenge
We provided some simple React template code. Your goal is to display an unordered list (UL) with list items (LI) within it. The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. The span elements should be separated by a single space.

<br>


```

Submit your code once it is complete and our system will validate your output.


```
<br>
<hr>
<br>

## Letter Changes
<br>

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

<br>

Examples

```

Input: "abcd"
Output: bcdE

```
<br>
<hr>
<br>

## Two Sum
<br>

Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1

<br>

Examples

```

Input: new int[] {17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7}
Output: 6,11 10,7 15,2

Input: new int[] {7, 6, 4, 1, 7, -2, 3, 12}
Output: 6,1 4,3


```
<br>
<hr>
<br>

## Distinct List
<br>

Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.

<br>

Examples

```

Input: new int[] {0,-2,-2,5,5,5}
Output: 3

Input: new int[] {100,2,101,4}
Output: 0


```
<br>
<hr>
<br>

## Letter Capitalize
<br>

Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

<br>

Examples

```

Input: "hello world"
Output: Hello World

Input: "i ran there"
Output: I Ran There


```
<br>
<hr>
<br>

## Math Challenge (2)
<br>

Have the function MathChallenge(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

<br>

Examples

```

Input: 12
Output: 78

Input: 140
Output: 9870

```
<br>
<hr>
<br>

## String Challenge
<br>

Have the function StringChallenge(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

<br>

Examples

```

Input: 126
Output: 2:6

Input: 45
Output: 0:45

```
<br>
<hr>
<br>


## Caesar Cipher
<br>

Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

<br>

Examples

```

Input: "Hello" & num = 4

Output: Lipps


Input: "abc" & num = 0

Output: abc


```
<br>
<hr>
<br>

## Math Challenge (3)
<br>

Have the function MathChallenge(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.


<br>

Examples

```

Input: 3 & num2 = 122
Output: true

Input: 67 & num2 = 67
Output: -1


```
<br>
<hr>
<br>


## String Challenge (2)
<br>

Have the function StringChallenge(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.


<br>

Examples

```

Input: "aabbcde"
Output: 2a2b1c1d1e

Input: "wwwbbbw"
Output: 3w3b1w


```
<br>
<hr>
<br>



## Meandering Array
<br>

An array of integers is defined as being in meandering order when the first two elements are the respective largest and smallest elements in the array and the subsequent elements alternate between its next largest and next smallest elements. In other words, the elements are in order of [first_largest, first_smallest, second_largest, second_smallest, ...].



<br>

Examples

```

Input: [-1, 1, 2, 3, -5]
Output: [3, -5, 2, -1, 1]


```
<br>
<hr>
<br>


## Generator Primes 
<br>

Give an integer n, use javascript generators to generate all prime numbers less than n.

<br>

Function Description: <br>
Complete the getPrimes function in the editor below.

<br>

getPrimes has the following parameters(s): <br>
n: an integer that represents the upper limit of prime numbers to be generated.

<br>

Examples

```

Input: 10

Output: 2 3 5 7

```
<br>
<hr>
<br>




