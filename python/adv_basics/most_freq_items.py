from collections import Counter

text = 'Sunset is the time of day when our sky meets the outer space solar winds. ' \
       'There are blue, pink, and purple swirls, spinning and twisting, like clouds ' \
       'of balloons caught in a blender. The sun moves slowly to hide behind the line ' \
       'of horizon, while the moon races to take its place in prominence atop the night sky.' \
       ' People slow to a crawl, entranced, fully forgetting the deeds that still must be done.' \
       ' There is a coolness, a calmness, when the sun does set.'

words = text.split()
# print(words)
counter = Counter(words)
top_three = counter.most_common(3)
print(top_three)