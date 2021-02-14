import re
import sys

fh1 = open('ngrok.log','r+')
fh2 = open('port.txt','w')
for line in fh1:
    words = line.split()
    if 'msg="started tunnel"' in line:
        x=words[7]
        print('worked')

fh1.truncate(0)
fh1.close()
y=re.findall('io:(\S+)',x)
str = ""
for ele in y:
    str += ele
fh2.write(str)
fh2.close()
