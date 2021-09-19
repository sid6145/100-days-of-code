const sentence =  `I as am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

function varietyOfWords(sentence){
    const sentenceArray = sentence.split(" ")

    return `${sentenceArray.length} words were used to make this sentence`
}

console.log(varietyOfWords(sentence))