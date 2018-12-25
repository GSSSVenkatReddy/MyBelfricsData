fw=open('sample.txt','w')
fw.write('hey man , how are you?\n')
fw.write('welcome to python\n')
fw.close()

fr=open('sample.txt','r')
text=fr.read()
print(text)
fr.close()