'''
# unpacking lists by using variables for each data item in the list

first_name,middle_name,last_name = ['sudheer','reddy','gudla']
print(first_name)
'''

def drop_first_last(grades):
    first,*middle,last = grades      # *middle = all middle elements except first & last
    avg = sum(middle) / len(middle)
    print(avg)
    print(first)
    print(last)

drop_first_last([14,58,68,58,87,96,45])

drop_first_last([10,20,30,40,50])