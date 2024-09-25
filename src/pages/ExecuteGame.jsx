// import { useSearchParams } from "react-router-dom";   // Query Params
// import { useParams } from "react-router-dom";       // Path Params
import Header from "../components/Header/header";
import MaskedText from "../components/MaskedText/MaskedText";
import HangMan from "../components/HangMan/HangMan";
import Score from "../components/Score/score";
import LetterButtonContainer from "../components/LetterButtons/LetterButtonContainer";
import { Link } from "react-router-dom";


/* 
    1. Query Params: ?text=hello
    2. Path Params: /hello
    3. State Object: {path: 'hello', index: false}
*/
function ExecuteGame({ score, description, letterCount, step, inputText, guessedLetter, onButtonClick }) {
    return (
        <div>
            <Header headerText={"HANGMAN"} headerStyle={"text-4xl text-center underline text-amber-600 font-bold"} />
            <div>
                <MaskedText letterCount={letterCount} originalWord={inputText} guessedLetter={guessedLetter} />
                <div style={{ margin: '1rem' }}><Score score={score} /></div>
                <div className="font-bold px-2 py-2">
                    <span>Description: </span>
                    <span>{description}</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', marginTop: '4rem' }}><LetterButtonContainer inputText={inputText} guessedLetter={guessedLetter} onButtonClick={onButtonClick} /></div>
                <div style={{ width: '50%', paddingLeft: '5rem' }}><HangMan step={step} /></div>
            </div>
            <div>
                {<Link to={'/'}>Home</Link>}
            </div>
        </div>

    );
}

export default ExecuteGame;