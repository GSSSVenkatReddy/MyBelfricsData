class Girl:
    gender = "female"

    def __init__(self,name):
        self.name = name     # we can use another variable also : self.b = name

r = Girl("ramkumari")
v = Girl("vaishali")

print(r.gender)
print(v.gender)

print(r.name)
print(v.name)
