const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

function countWords(sentence){
    sentenceArray = sentence.split(" ")

    const wordsArray = []

    for(let i = 0; i < sentenceArray.length; i++){
        if(sentenceArray[i].length > 1){
            wordsArray.push(sentenceArray[i])
        }
    }

    return `sentence include ${wordsArray.length} words excluding single letter words `
}

console.log(countWords(sentence))