# Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

# flatten [1,2,3] # => [1,2,3]
# flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
# flatten [[[1,2,3]]] # => [[1,2,3]]

def flatten(lst):
    if len(lst) == 0:
        return lst
    if isinstance(lst[0], list):
        return [item for items in lst for item in items]
    else:
        return lst
