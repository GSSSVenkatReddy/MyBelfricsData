import heapq

grades = [56,58,96,85,90,36,78,65,26,48]
print(heapq.nlargest(3,grades))

store = [
    {'item' : 'book','price' : 300},
    {'item' : 'pen','price' : 100},
    {'item' : 'printer','price' : 5000},       # list of dictionaries
    {'item' : 'pencil','price' : 10},
    {'item' : 'eraser','price' : 5},

]

print(heapq.nsmallest(2,store,key = lambda x : x['price']))