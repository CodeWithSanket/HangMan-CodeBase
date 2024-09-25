/**
 * originalWord: Word which is being passed as an input from UI
 * guessedLetter: Letter which is being guessed by the user
 * 
 * For example: originalWord: "HUMBLE", guessedLetter: ['H','m','E']
 * Return: "H_M__E" (Blank spaces represent the letters to be guessed)
 */


export function getMaskedText(originalWord, guessedLetter) {
    originalWord = originalWord.split("").map((char) => char.toUpperCase());
    guessedLetter = guessedLetter.map((char) => char.toUpperCase());
    originalWord = originalWord.map((char) => {
        if(guessedLetter.includes(char)) {
            return char;
        }
        else {
            return "_";
        }
    });
    return originalWord;
}