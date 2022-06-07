# Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

# The inputs will always be two positive integers between 2 and 99.

# Examples
# 20 and 27:

# Factors of 20: 1, 2, 4, 5, 10, 20
# Factors of 27: 1, 3, 9, 27
# Greatest shared factor: 1
# Result: 20 and 27 are coprime
# 12 and 39:

# Factors of 12: 1, 2, 3, 4, 6, 12
# Factors of 39: 1, 3, 13, 39
# Greatest shared factor: 3
# Result: 12 and 39 are not coprimes

def are_coprime(n,m):
    for i in range(2, max([n, m])):
        if (n % i == 0 and m % i == 0):
            return False
        
    return True
