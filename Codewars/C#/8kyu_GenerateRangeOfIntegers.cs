/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

GenerateRange(2, 10, 2) == new int[]{ 2, 4, 6, 8, 10 }
GenerateRange(1, 10, 3) == new int[]{ 1, 4, 7, 10 }

Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

using System.Collections.Generic;

public class Kata
{
  public static int[] GenerateRange(int min, int max, int step)
  {
    var arrNum = new List<int>();
    var counter = min;
    while (counter <= max) 
    {
      arrNum.Add(counter);
      counter += step;
    }
    return arrNum.ToArray();
  }
}
