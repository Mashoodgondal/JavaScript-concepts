# for i in range(5):
#     print(i)
MARS_GRAVITY= 0.38
earth_weight=input("Enter earth weight in kg: ")
earth_weighted= float(earth_weight)
mars_weight= earth_weighted * MARS_GRAVITY
print(f"mars weight: {mars_weight}")