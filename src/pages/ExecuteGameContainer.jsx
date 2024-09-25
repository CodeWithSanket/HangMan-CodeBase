import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ExecuteGame from "./ExecuteGame";

function ExecuteGameContainer() {
    // const [searchParams, setSearchParams] = useSearchParams(); -> Query Params
    // const { text } = useParams(); //-> Path Params
    const location = useLocation(); // useLocation returns an object here which is location
    const [guessedLetter, setGuessedLetter] = useState([]);  // guessletter: []
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [letterCount, setLetterCount] = useState(0);

    // guessedLetter: []
    // guessedLetter: ['A']
    // guessedLetter: ['A','P','W']

    let originalWord = location.state.inputValue.split("").map((letter) => letter.toUpperCase());
    let obj = {};
    function createMapping(originalWord) {
        for (let i = 0; i < originalWord.length; i++) {
            if (obj[originalWord[i]] == undefined) {
                obj[originalWord[i]] = 1;
            }
            else {
                obj[originalWord[i]]++;
            }
        }
        return obj;
    }

    useEffect(() => {
        createMapping(originalWord);
    })

    function onButtonClick(letter) {
        if (guessedLetter.includes(letter) == false && originalWord.includes(letter) == false) {
            setStep(step + 1);
        }
        else if (originalWord.includes(letter)) {
            const countLetter = obj[letter] + letterCount;
            setLetterCount(countLetter);
            setScore(score + 10);
        }
        setGuessedLetter([...guessedLetter, letter]);
    }

    return (
        <>
            <div>
                <ExecuteGame score={score} description={location.state.description} letterCount={letterCount} inputText={location.state.inputValue} step={step} guessedLetter={guessedLetter} onButtonClick={onButtonClick} />
            </div>
        </>
    )
}

export default ExecuteGameContainer;