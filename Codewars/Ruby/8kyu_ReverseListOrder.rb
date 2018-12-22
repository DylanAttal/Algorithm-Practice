# In this kata you will create a function that takes in a list and returns a list with the reverse order.

# Examples
# reverseList([1,2,3,4]) == [4,3,2,1]
# reverseList([3,1,5,4]) == [4,5,1,3]


# Built in solution
# def reverse_list list
#  list.reverse
# end


# Other solution
def reverse_list list
  new_array = []
  x = list.length - 1
  while x >= 0
    new_array.push(list[x])
    x -= 1
  end
  new_array
end
