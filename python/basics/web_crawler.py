import requests
from bs4 import BeautifulSoup

# we can access data data from all available pages in a website
# for that code see bucky_roberts tutorial-simple one

def amazon():
        url = 'https://www.amazon.in/'
        source_code = requests.get(url)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text)
        for link in soup.findAll('a', {'class': 'a-link-normal'}):
            href = 'https://www.amazon.in/' + link.get('href')
            # title = link.string : for getting string value from the link, like hyperlink name,button name,...etc.
            print('\n',href)
            # print(title)
            data_of_single_item(href)

def data_of_single_item(item_url):
    source_code = requests.get(item_url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text)
    for item_name in soup.findAll('a', {'id': 'bylineInfo'}):
        print('sponsered by : ' + item_name.string)
    '''
    for link in soup.findAll('a'):       # printing other links of each item
        href = 'https://www.amazon.in/' + link.get('href')
        print(href)
    '''
    # check_it_out : if we run the above loop we will get TypeError because that page contains not only strings but buttons also i.e other than text.....
    # watch tutorial no. 27 by bucky_roberts

amazon()



