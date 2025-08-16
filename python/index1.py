# STEP BY STEP ASSIGNMENT TO LEARN PYTHON

# FUNCTION TO ADD NUMBERS

# def add_numbers(a, b): 
#     return a + b
# result = add_numbers(5, 3)  
# print(result)

# FUNCTOIN TO FIND POWER
# def find_power(a,b):
#     return a ** b
# print(find_power(4,5))







# INDEXING AND SLICING


# fruits = ["apple", "banana", "cherry", "date"]

# Indexing (starts at 0)
# print(fruits[0]) 
# print(fruits[-1])


# # Slicing [start:end:step]
# print(fruits[1:3])  # ["banana", "cherry"]
# print(fruits[0:2:1])   # ["apple", "cherry"]

# # Modifying
# fruits.append("fig")       # Adds at the end
# fruits.insert(1, "berry")  # Inserts at index 1
# fruits.pop(2)              # Removes item at index 2
# fruits.sort()              # Sorts alphabetically
# print(fruits)


fruits = ["apple", "banana", "cherry", "date"]
# -------------How do you access the last element of a list?

# print(fruits[-1])

# ---------------Write a code to reverse a list without using reverse().

# print(fruits[::-1])

# -----------------How do you remove "banana" from fruits using remove()?

# fruits.pop(1)
# print(fruits)


    # DICTIONARIES]

        # Creating a dictionary
# student = {"name": "Alice", "age": 21, "courses": ["Math", "Science"]}

# Accessing values
# print(student["name"])  # "Alice"
# print(student.get("age"))  # 21 (safer, returns None if key missing)

# # Modifying
# student["age"] = 22  # Updates age
# student.update({"age": 23, "gender": "F"})  # Updates multiple keys
# print(student)
# Looping
# for key, value in student.items():
#     print(f"{key}: {value}")
# print()






# -----------Type Hint and Annomation In Python


# Basic types
name: str = "Alice"
age: int = 25
height: float = 5.9
is_active: bool = True

# List and Dict (need to import from typing)
from typing import List, Dict, Optional

names: List[str] = ["Alice", "Bob", "Charlie"]
scores: Dict[str, int] = {"Alice": 90, "Bob": 85}

# Optional (value can be type or None)
nickname: Optional[str] = None

# Function example
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"




name: str = "Alice"
age: int = 25
height: float = 5.9
is_active: bool = True

# List and Dict (need to import from typing)
from typing import List, Dict, Optional

names: List[str] = ["Alice", "Bob", "Charlie"]
scores: Dict[str, int] = {"Alice": 90, "Bob": 85}

# Optional (value can be type or None)
nickname: Optional[str] = None

# Function example
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"
name: str = "Alice"
age: int = 25
height: float = 5.9
is_active: bool = True

# List and Dict (need to import from typing)
from typing import List, Dict, Optional

names: List[str] = ["Alice", "Bob", "Charlie"]
scores: Dict[str, int] = {"Alice": 90, "Bob": 85}

# Optional (value can be type or None)
nickname: Optional[str] = None

# Function example
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"
name: str = "Alice"
age: int = 25
height: float = 5.9
is_active: bool = True

# List and Dict (need to import from typing)
from typing import List, Dict, Optional

names: List[str] = ["Alice", "Bob", "Charlie"]
scores: Dict[str, int] = {"Alice": 90, "Bob": 85}

# Optional (value can be type or None)
nickname: Optional[str] = None

# Function example
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"
