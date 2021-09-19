const paragraph = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

function countWords(text, word1, word2) {
  let counter1 = 0;
  let counter2 = 0;
  let textArray = text.split(" ");

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes(word1)) {
      counter1 = counter1 + 1;
    }else if (textArray[i].includes(word2)){
      counter2 = counter2 + 1;
    } 
  }

  if (counter1 > counter2) {
    console.log(`the word ${word1} more fequently occured than ${word2}`);
  } else if (counter1 < counter2) {
  
    console.log(`the word ${word2} more fequently occured than ${word1}`);
  } else {
    console.log(`both ${word1} and ${word2} occured same number of times`)
};
}

console.log(countWords(paragraph, "love", "you"));
