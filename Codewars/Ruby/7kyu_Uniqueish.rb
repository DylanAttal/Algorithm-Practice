# Write a function unique which takes an array of strings, and returns an array of unique strings.

# The tricky part is that case and punctuation don't matter to this function. So:

# unique(["hello", "Hello", "Hello!", "world!"])

# Would return:

# => ["hello", "world!"]

def unique strings
  strings.uniq{ |string| string.downcase.gsub(/[^a-z]/, '')}
end
