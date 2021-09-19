const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const notNeeded = ["!", '@', '#', '$', '%', ';']

                    
function cleanText(sentence){
        let filteredText = ''
        
        for(let i = 0; i < sentence.length; i ++){
            for(let j = 0; j < notNeeded.length; j++){
                if(sentence[i] == notNeeded[j]){
                        filteredText = sentence.replace(notNeeded[i], "")
                }
            }
        
   }
   return filteredText
}

console.log(cleanText(sentence))
    
    

   

