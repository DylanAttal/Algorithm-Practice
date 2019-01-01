# Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

# C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
# Replace certain values however if any of the following conditions are met:

# If the value is a multiple of 3: use the value 'Fizz' instead
# If the value is a multiple of 5: use the value 'Buzz' instead
# If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
# C# method calling example:

# string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]

def fizzbuzz(n)
  array = (1..n).to_a
  answer = []
  for i in array do
    if (i % 15 == 0)
      answer.push('FizzBuzz')
    elsif (i % 3 == 0)
      answer.push('Fizz')
    elsif (i % 5 == 0)
      answer.push('Buzz')
    else 
      answer.push(i)
    end
  end
  answer
end
