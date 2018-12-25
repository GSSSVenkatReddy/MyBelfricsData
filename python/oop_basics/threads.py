import threading

class Messenger(threading.Thread):
    def run(self):
        for _ in range(10):
            print(threading.currentThread().getName())

x = Messenger(name="sending messages")
y = Messenger(name="receive messages")
x.start()
y.start()
