# Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

# The function should reject any arguments that are not integers, and sum the remaining integers.

# sum(1, 2, 3)    ==>  6
# sum(1, "2", 3)  ==>  4

def sum(*args):
    sum = 0
    
    for num in args:
        if type(num) is int:
            sum += num
            
    return sum
