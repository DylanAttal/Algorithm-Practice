# Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

# For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

# The input will be a lowercase string with no spaces.

# Good luck!


def capitalize(s)
 even = []
 odd = []
 s.split('').each_with_index { |letter, index|
   if index.even?
     even.push(letter.upcase)
   else
     even.push(letter)
   end
  }
  s.split('').each_with_index { |letter, index|
   if index.odd?
     odd.push(letter.upcase)
   else
     odd.push(letter)
   end
  }
  [even.join, odd.join]
end
