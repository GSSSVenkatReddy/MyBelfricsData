stocks = {
    'GOOG': 520.69,
    'FB' : 89.63,
    'YHOO' : 39.65,
    'AMZN' : 306.35,
    'AAPL' : 99.76
}

print(min(zip(stocks.values(),stocks.keys())))    # try for keys(),values()

print(max(zip(stocks.values(),stocks.keys())))

print(sorted(zip(stocks.values(),stocks.keys())))