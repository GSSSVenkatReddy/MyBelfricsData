'''
num = int(input('enter any number:\n'))
print(num)

# if there is a mistake in the code we will get syntax error

# if there is a mistake in input we will get exception, here ex:- Value Error
'''

# Exception handling

while True:
    try:
        num = int(input('enter any number:\n'))
        print(100/num)
        break
    except ValueError:
        print("make sure and please enter a number")
    except ZeroDivisionError:
        print("enter any number except 0")
    except:    # In case of unknown exceptions : this line not encouraged
        break
    finally:
        print("loop complete")


