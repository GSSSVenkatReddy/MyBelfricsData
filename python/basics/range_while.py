#range with one attribute
for x in range(10):
    print(x)
    #print("sudheer is awesome")

#range with two attributes
for x in range(2,8):
    print(x)

#range with three attributes ( 3rd attribute for incrementation)
for x in range(10,50,10):
    print(x)

#while loop

a=5
while a < 10:
    print(a)
    a +=1


'''
#sum of n numbers using range
c=0
for n in range(1,101):
    c+=n
print(c)
'''

#sum of n numbers using range and input from user
c=0
x=int(input("enter any number:"))  #casting
for n in range(1,x+1):
    c+=n
print(c)