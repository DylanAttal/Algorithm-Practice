/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas,
return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  let countOfIdeas = {}
  
  for (let i = 0; i < x.length; i++) {
    if (countOfIdeas[x[i]] !== undefined) {
      countOfIdeas[x[i]] = countOfIdeas[x[i]] + 1
    } else {
      countOfIdeas[x[i]] = 1
    }
  }
  
  if (countOfIdeas['good'] > 2) {
    return 'I smell a series!'
  } else if (countOfIdeas['good'] > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}
