
function LetterButton({letterArray, guessedLetter, onButtonClick, getButtonStyle }) {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {letterArray.map((letter, index) => (
                <button key={index}
                    value={letter}
                    className={`bg-blue-500 h-12 w-12 rounded-md text-white font-bold py-2 px-4 ${getButtonStyle(letter)}`}
                    disabled={guessedLetter.has(letter)}
                    onClick={onButtonClick}>
                    {letter}
                </button>
            ))}
        </div>
    )
}

export default LetterButton;