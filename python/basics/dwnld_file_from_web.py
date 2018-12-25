from urllib import request  # another syntax for importing module

goog_url='http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv'

def download_stock_data(csv_url):
    response = request.urlopen(csv_url)
    csv = response.read()
    csv_str = str(csv)
    lines = csv_str.split("\\n")
    dest_url = r'sample.csv'     # we can also add any folder path as destination : E:\---\
    fx = open(dest_url, 'w')
    for line in lines:
        fx.write(line+'\n')
    fx.close()

download_stock_data(goog_url)
