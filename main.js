// Messages
const messages = {
    messagesOne: [
        'All our dreams can come true,',
        'The secret of getting ahead',
        'I’ve missed more than 9,000 shots in my career.',
        'Don’t limit yourself.',
        'The best time to plant a tree was 20 years ago.'
    ],
    messagesTwo: [
        'if we have the courage to pursue them.',
        'is getting started.',
        'i’ve lost almost 300 games.',
        'many people limit themselves',
        'the second best time is now.'
    ],
    messagesThree: [
        '– Walt Disney',
        '– Mark Twain',
        '– Michael Jordan',
        '– Mary Kay Ash',
        '– Chinese Proverb'
    ]
};

// Get random number
const randomNum = num => {return Math.floor(Math.random() * num)};
//console.log(randomNum(5));


// Get mixed messages
const finalMessage = `MESSAGE: ${messages.messagesOne[randomNum(messages.messagesOne.length)]}` + `${messages.messagesTwo[randomNum(messages.messagesOne.length)]}` + `${messages.messagesThree[randomNum(messages.messagesOne.length)]}`;

console.log(finalMessage);