# Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

# for input:                5, true, false
# expected result would be: [true, false, true, false, true]

def alternate(n, first_value, second_value):
    return [first_value if x % 2 == 0 else second_value for x in range(n)]
