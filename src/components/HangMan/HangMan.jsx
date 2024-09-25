import level1 from '../../assets/Images/1.svg';
import level2 from '../../assets/Images/2.svg';
import level3 from '../../assets/Images/3.svg';
import level4 from '../../assets/Images/4.svg';
import level5 from '../../assets/Images/5.svg';
import level6 from '../../assets/Images/6.svg';
import level7 from '../../assets/Images/7.svg';
import level8 from '../../assets/Images/8.svg';
import LossGame from '../GameOver/LossGame';


function HangMan({ step }) {
    const images = [level1, level2, level3, level4, level5, level6, level7, level8];
    if (step >= 8) {
        return (
            <>
                <LossGame />
                <div className={"w-[300] h-[300]"}>
                    <img src={level8} alt="Hangman" />
                </div>
            </>
        )
    } else {
        return (
            <div className={"w-[300] h-[300]"}>
                <img
                    src={step > 0 && step < images.length ? images[step - 1] : images[images.length - 1]}
                    alt="Hangman"
                />
            </div>
        );
    }
}

export default HangMan;