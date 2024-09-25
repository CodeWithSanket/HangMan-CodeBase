import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/header";
import { useEffect, useState } from "react";


function Home() {
    const navigate = useNavigate();
    const [word, setWord] = useState('');
    const [description, setDescription] = useState('');


    async function fetchData() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex].wordsValue);
        setDescription(data[randomIndex].wordsHint)
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <Header headerText={"HANGMAN"} headerStyle={"text-4xl text-center underline text-amber-600 font-bold"} />
            <Button type={"button"}
                text={"Single Player"}
                buttonstyleName={"primary"}
                onClickHandler={() => { navigate('/executeGameContainer', { state: { inputValue: word, description: description } }) }}
            />
            <Button
                type={"button"}
                text={"Multi Player"}
                buttonstyleName={"primary"}
                onClickHandler={() => { navigate('/StartGame') }}
            />
        </div>
    );
}

export default Home;