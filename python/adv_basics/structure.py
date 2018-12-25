from struct import *

# store as bytes data
packed_data = pack('iif',10,15,20.36)
print(packed_data)

print(calcsize('i'))
print(calcsize('f'))
print(calcsize('iif'))

# to get byte data back to normal (b'\n\x00\x00\x00\x0f\x00\x00\x00H\xe1\xa2A')
original_data = unpack('iif',packed_data)
print(original_data)

print(unpack('iif',b'\n\x00\x00\x00\x0f\x00\x00\x00H\xe1\xa2A'))


