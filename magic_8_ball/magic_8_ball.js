exports.handler = (event, context, callback) => {
    var question = event.Q;
    var answer = "";
    var randNum = Math.floor(Math.random() * 8 + 1);

    switch (randNum)
      {
        case 1:
            answer = "It is certain"
            break;
        case 2:
            answer = "Outlook good"
            break;
        case 3:
            answer = "You may rely on it"
            break;
        case 4:
            answer = "Ask again later"
            break;
        case 5:
            answer = "Concentrate and ask again"
            break;
        case 6:
            answer = "Reply hazy, try again"
            break;
        case 7:
            answer = "My reply is no"
            break;
        case 8:
            answer = "My sources say no"
            break;
        default:
            answer = "Something went wrong..."
            break;
    }

    callback(null, {
        "Answer": answer
    });
};

