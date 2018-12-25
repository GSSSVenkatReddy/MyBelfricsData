classmates={"akhil":"brainstorm","surya":"big mf","hari":"masters in MS"}

print(classmates)             # Dictionary composed of : key & value pairs

print(classmates["akhil"])
print(classmates["surya"])
print(classmates["hari"])

for k,v in classmates.items():
    print(k+":"+v)