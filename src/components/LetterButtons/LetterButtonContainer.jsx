import LetterButton from "./LetterButton";

function LetterButtonContainer({inputText, guessedLetter, onButtonClick}) {
    const letterString = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const letterArray = letterString.split("");
    const originalWord = inputText.split("").map((letter) => letter.toUpperCase());

    const originalWordSet = new Set(originalWord);
    const guessedLetterSet = new Set(guessedLetter);

    function handleButtonClick(event) {
        onButtonClick?.(event.target.value);   // ?. -> If someone does not pass onButtonClick as a prop when calling its component then it should not go in nesting otherwise go in nesting
    }

    function getButtonStyle(letter) {
        if (originalWordSet.has(letter) && guessedLetterSet.has(letter)) {
            return `bg-green-500`;
        } else if (originalWord.includes(letter) == false && guessedLetter.includes(letter)) {
            return "bg-red-500";
        } else {
            return "bg-blue-500";
        }
    }

    return (
        <LetterButton letterArray={letterArray} guessedLetter={guessedLetterSet} onButtonClick={handleButtonClick} getButtonStyle={getButtonStyle}/>
    );
}

export default LetterButtonContainer;