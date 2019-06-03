// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


let addExcitement = (theWordArray, punctuation, num) => {
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";
    let start = 0
    let addpunctuation = "";
    for(let j = 0; j < num; j++){
        addpunctuation += punctuation;
    }
    for (let i = 0; i < theWordArray.length; i++) {
        start++
        if (start % 3 === 0) {
            buildMeUp += theWordArray[i] + addpunctuation + " ";
        } else
        // Concatenate the new word onto buildMeUp
        buildMeUp += theWordArray[i] + " ";
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}


// Invoke the function and pass in the array
addExcitement(sentence, "?", 8);