/*

*/


using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static string GetStrings(string city)
    {
      city = city.ToLower();
      city = city.Replace(" ", "");
      
      var dictionary = new Dictionary<char, int>();
      
      foreach(char letter in city) 
      {
        if (dictionary.ContainsKey(letter))
        {
          dictionary[letter] += 1;
        } else 
        {
          dictionary[letter] = 1;
        }
      }
      
      string answer = "";
      
      foreach (var kvp in dictionary) 
      {
        answer += $"{kvp.Key.ToString()}:";
        answer += string.Concat(Enumerable.Repeat("*", kvp.Value));
        answer += ",";
      }

      return answer.TrimEnd(',');
    }
}
