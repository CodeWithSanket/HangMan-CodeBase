import WinGamePopUp from "../GameOver/WinGame";
import { getMaskedText } from "./MaskingUtility";

export default function MaskedText({ score, letterCount, originalWord, guessedLetter }) {
    const MaskedTextArr = getMaskedText(originalWord, guessedLetter);
    if (letterCount < MaskedTextArr.length) {
        return (
            <div className="flex flex-row justify-center gap-2 my-8">
                {/* Rendering List */}
                {MaskedTextArr.map((char, index) => (
                    <span key={index} className="text-3xl">
                        {char}
                    </span>
                ))}
            </div>
        );
    }
    else {
        return <WinGamePopUp score={score} />
    }
}



