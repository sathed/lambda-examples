from random import seed, randint
import calendar
import time


seconds_since_epoch = calendar.timegm(time.gmtime())
def handler_name(event, context):
    seed(seconds_since_epoch)

    switch = {
        1: "Ask again later",
        2: "Concentrate and ask again",
        3: "It is certain",
        4: "My reply is no",
        5: "My sources say no",
        6: "Outlook good",
        7: "Reply hazy, try again",
        8: "Yes. No. Maybe? I dunno...",
        9: "You may rely on, it"
    }

    return switch[randint(1, len(switch))]
