class Parent:

    def last_name(self):
        print("Gudla")

class Child(Parent):      # Inheritance

    def first_name(self): # here properties of parent class are copied into the child class due to inheritance
        print("Venkat")   # i.e, here last_name() is copied into child class

'''
    def last_name(self):  # Method Overriding
        print("Reddy")
'''

child = Child()
child.first_name()
child.last_name()