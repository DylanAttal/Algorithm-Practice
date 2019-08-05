/* Complete the solution so that it returns true if the first argument(string) passed
in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

using System;

public class Kata

{
  public static bool Solution (string str, string ending)
  {
    if (str.Length < ending.Length) 
    {
      return false;
    }
    return ending == str.Substring(str.Length - ending.Length);
  }
}
