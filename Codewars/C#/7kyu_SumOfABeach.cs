/* Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words
"Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
SumOfABeach("WAtErSlIde")                    ==>  1
SumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
SumOfABeach("gOfIshsunesunFiSh")             ==>  4
SumOfABeach("cItYTowNcARShoW")               ==>  0 */

using System;
using System.Text.RegularExpressions;

public class Kata
{
    public static int SumOfABeach(string s)
    {
        return Regex.Matches(s, "sand|water|fish|sun", RegexOptions.IgnoreCase).Count;
    }
}
