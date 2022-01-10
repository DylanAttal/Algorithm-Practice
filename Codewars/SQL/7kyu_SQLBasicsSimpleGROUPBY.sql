/*
For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.

people table schema
id
name
age

select table schema
age [group by]
people_count (people count)
*/

SELECT
  age,
  COUNT(name) AS people_count
FROM people
GROUP BY age;
