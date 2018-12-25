income = [10,30,75]

def double_money(dollars):
    return dollars*2

print(list(map(double_money,income)))

'''
for item in income:
    d = double_money(item)
    print(d)
'''
