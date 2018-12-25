from operator import attrgetter

class Users:
    def __init__(self,x,y):
        self.name = x
        self.user_Id = y

    def __repr__(self):
        return self.name + ' : ' + str(self.user_Id)

users = [
    Users('sudhir',25),
    Users('surya',9),
    Users('akhil',18),
    Users('rod',53),
    Users('dutt',44)
]

for user in users:
    print(user)

print('-----')
for user in sorted(users,key=attrgetter('name')):
    print(user)

print('-----')
for user in sorted(users,key=attrgetter('user_Id')):
    print(user)

