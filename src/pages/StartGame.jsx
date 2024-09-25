import Header from "../components/Header/header";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        <>  
            <Header headerText={"HANGMAN"} headerStyle={"text-4xl text-center underline text-amber-600 font-bold"} />
            <TextInputFormContainer />
        </>
    );

}

export default StartGame;