/*
Your task

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
new Dictionary<string, int> {{"Java", 10}, {"Ruby", 80}, {"Python", 65}} => {"Ruby", "Python"}
new Dictionary<string, int> {{"Hindi", 60}, {"Greek", 71}, {"Dutch", 93}} => {"Dutch", "Greek", "Hindi"}
new Dictionary<string, int> {{"C++", 50}, {"ASM", 10}, {"Haskell", 20}} => {}
*/

using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static IEnumerable<string> MyLanguages(Dictionary<string, int> results)
  {
    results = results
      .OrderByDescending(kvp => kvp.Value)
      .ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
    
    var languagesGreaterThanSixty = results.Where(kvp => kvp.Value >= 60);

    var names = languagesGreaterThanSixty.Select(kvp => kvp.Key).ToList();

    return names;
  }
}
