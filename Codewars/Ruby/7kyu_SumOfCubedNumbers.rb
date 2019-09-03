# Find the sum of the odd numbers within an array, after cubing the initial integers. 
# The function should return undefined/None/nil/NULL if any of the values aren't numbers.

def cube_odd(arr)
  arr.all?{ |num| num.is_a? Integer } ? arr.select{ |num| num.odd? }.map{ |num| num**3 }.sum : nil
end
