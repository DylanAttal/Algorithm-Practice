# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains more than 3 numbers.

# The tests contain some very huge arrays, so think about performance.

def find_uniq(arr)
  lookup = {}
  arr.each do |num|
    if (lookup[num])
      lookup[num] += 1
    else
      lookup[num] = 1
    end
  end
  lookup.select { |k, v| return k if v == 1 }
end
