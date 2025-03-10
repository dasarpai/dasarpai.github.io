# code to generate factorial of a number.
def fact(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

# function to generate fibinacci series upto nth term.
def fibo (n):
    if n == 1 or n == 2 : return 1
    return (fibo (n - 1) + fibo (n - 2))

import math
# function to check if a number is prime
def prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# function to find greatest common divisor of two numbers.
def gcd (a , b):
    if a == 0 : return b
    return gcd (b % a, a)

# main function to call all these functions and print the results on screen.
if __name__ == '__main__':
    print ("Factorial of 5 is : ", fact (5))    
    print ("Fibinacci series upto nth term : ", fibo (10))    
    print ("Prime numbers between 2 and 100 : ", prime (100))
