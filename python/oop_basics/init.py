class Tuna:

    def __init__(self):   # automatically invoked first when the object is created
        print("automatic")

    def name(self):
        print("I'm tuna")

ob1 = Tuna()
ob1.name()

class Enemy:

    def __init__(self,x):
        self.energy = x

    def getEnergy(self):
        print(self.energy)

akm = Enemy(5)
awm = Enemy(10)

akm.getEnergy()
awm.getEnergy()