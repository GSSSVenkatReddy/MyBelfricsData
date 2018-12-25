class Mario:
    def move(self):
        print("I'm moving")

class Mushroom:
    def eat(self):
        print("I'm big")

class BigMario(Mario,Mushroom):
    pass # It means class is finished. Without it, we will get syntax error for empty class

bm = BigMario()
bm.move()
bm.eat()