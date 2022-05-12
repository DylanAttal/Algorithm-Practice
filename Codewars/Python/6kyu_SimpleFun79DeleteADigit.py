# Task
# Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

# Example
# For n = 152, the output should be 52;

# For n = 1001, the output should be 101.

# Input/Output
# [input] integer n

# Constraints: 10 ≤ n ≤ 1000000.

# [output] an integer

def delete_digit(n):
    n = str(n)
    max = 0
    
    for i in range(len(n)):
        if i == 0:
            num = int(n[1::])
        elif i == len(n) - 1:
            num = int(n[:-1:])
        else:
            num = int(n[0:i:] + n[i+1::])
        
        if num > max:
            max = num
    
    return max
