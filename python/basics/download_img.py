import random # for giving random name for downloaded image by using its function

import urllib.request # used for getting data from websites

def download_web_image(url):
    name=random.randrange(1,1000)
    fullname=str(name)+".jpg"       # type-casting no. to str
    urllib.request.urlretrieve(url,fullname)

download_web_image("https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c48.0.160.160/p160x160/11745363_427803740743352_990760832404736337_n.jpg?_nc_cat=0&oh=48437f4fab16158b894c8494f6ee51e6&oe=5C336ADB")

# download_web_image("http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv")

# we can also download various types of files like .csv , .pdf , ..etc.