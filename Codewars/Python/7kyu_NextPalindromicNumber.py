# There were and still are many problem in CW about palindrome numbers and palindrome strings. 
# We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

# In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) 
# that will output the smallest palindrome number higher than val.

# Let's see:

# For Python
# next_pal(11) == 22

# next_pal(188) == 191

# next_pal(191) == 202

# next_pal(2541) == 2552

def is_palindrome(val):
    return str(val) == str(val)[::-1]

def next_pal(val):
    val = val + 1
    while not is_palindrome(val):
        val = val + 1
    return val
