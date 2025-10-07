# for i in range(5):
#     print(i)

# MARS_GRAVITY= 0.38
# earth_weight=input("Enter earth weight in kg: ")
# earth_weighted= float(earth_weight)
# mars_weight= earth_weighted * MARS_GRAVITY
# print(f"mars weight: {mars_weight}")

# =========== Ratio on other planets ============

# earth_weight = input("Enter Earth weight  ")
# earth_weight= float(earth_weight)
# gravity_ratios={
#         "Mercury": 0.38,
#         "Venus": 0.91,
#         "Mars": 0.38,
#         "Jupiter": 2.34,
#         "Saturn": 1.06,
#         "Uranus": 0.92,
#         "Neptune": 1.19,
#         "Pluto": 0.06
# }
# print("Weight of the object on other planets:")
# for planet,ratio in gravity_ratios.items():
#     planet_weight = earth_weight * ratio
#     print(f"{planet}:{planet_weight:.3f}kg")





# find factorial of the number
# num = int(input("Enter a number: "))
# factorial = 1
# for i in range(1, num + 1):
#     factorial *= i

# print(f"factorial is {factorial}")

# def fib(n):
#     if n <= 1:
#         return n
#     return fib(n-1) + fib(n-2)
# for i in range(10):
#  print(fib(10), end=" ")



# LIST IN PYTHON

# fruit =["apple","bnana","mengo"]
# print(fruit)
# fruit.append('orange')
# fruit[1]="kewi"
# print(fruit)




# TUPLE IN PYTHON


# numbers =(2,5,5,6,7)
# print(numbers)
# print(numbers[1])


# SETS IN PYTHON

# unique_number = {2,5,4,3,5,3,4,5,6,7,6}
# print(unique_number)
# print(0 in unique_number)
# print(4 in unique_number)


# DICTIONARY IN PYHTON

# student = {"name": "Alice", "age": 25, "courses": ["Math", "Science"]}
# student["age"] = 26  # Update value
# print(student["courses"])  # Output: "Alice"


# REMOVE DUPLICATE OF LIST


# numbers = [3,5,6,4,6,34,2,1,6,7,8]
# unique = list(set(numbers))
# print(numbers)
# print(unique)


# COMBINE LIST 

# keys1 = ["name", "age","habits","city"]
# values = ["Bob", 30,["hockey","cirket"] ,"New York"]
# person = dict(zip(keys1, values))
# print(person)  


# FAST LOOCKUP

# usernames = {"alice", "bob", "charlie"}
# print("alice" in usernames)  # Output: True (O(1) time)