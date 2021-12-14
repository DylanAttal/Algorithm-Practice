# Make a function that receive age, and return what they drink.

# Rules:

# Children under 14 old.
# Teens under 18 old.
# Young under 21 old.
# Adults have 21 or more.
# Examples: (Input --> Output)

# 13 --> "drink toddy"
# 17 --> "drink coke"
# 18 --> "drink beer"
# 20 --> "drink beer"
# 30 --> "drink whisky"

def people_with_age_drink(old)
  case old
  when 0..13
    "drink toddy"
  when 14..17
    "drink coke"
  when 18..20
    "drink beer"
  else
    "drink whisky"
  end
end
