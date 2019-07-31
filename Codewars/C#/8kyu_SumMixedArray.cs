/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

using System;

public class Kata
{
  public static int SumMix(object[] x)
  {
    int sum = 0;
    foreach (object element in x)
    {
      sum += Convert.ToInt32(element);
    }
    return sum;
  }
}
