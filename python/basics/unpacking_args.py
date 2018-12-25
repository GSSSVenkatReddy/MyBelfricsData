def health(age,apples_ate,cgs_smoked):
    total=(100-age)+(apples_ate*3.5)-(cgs_smoked*2)
    print(total)

bucky=[21,7,0]

health(bucky[0],bucky[1],bucky[2])

health(*bucky)  # unpacking arguments using *,simplified syntax compared to above statement

health(21,3,0)